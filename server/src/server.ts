/**
 * Copyright 2018 The AMPHTML-Validator Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

import {
  createConnection,
  TextDocuments,
  TextDocument,
  Diagnostic,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification
} from 'vscode-languageserver/lib/main';
import {
  isAmpHtmlDocument,
  makeDiagnostic
} from './utils';

const amphtmlValidator = require('amphtml-validator');

import * as AmpValidatorTypes from './amp-validator-types';

// Create a connection for the server.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
let documents: TextDocuments = new TextDocuments();
let hasConfigurationCapability: boolean = false;

/**
 * On initialization.
 */
connection.onInitialize((params: InitializeParams) => {
  let capabilities = params.capabilities;

  hasConfigurationCapability =
    capabilities.workspace && !!capabilities.workspace.configuration;

  return {
    capabilities: {
      textDocumentSync: documents.syncKind
    }
  };
});

/**
 * When language server is initialized.
 */
connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    connection.client.register(
      DidChangeConfigurationNotification.type,
      undefined
    );
  }
});

/**
 * The content of the document has changed. This event is emitted
 * when the document is first opened or when its content has changed.
 * @param change
 */
documents.onDidChangeContent(change => {
  validateDocument(change.document);
});

/**
 * Validates the document using AMP HTML validator, if found valid attribute.
 * @param textDocument
 */
async function validateDocument(textDocument: TextDocument): Promise<void> {
  const text = textDocument.getText();

  const uri = textDocument.uri.toString();
  const checkAmpDocument = isAmpHtmlDocument(textDocument);

  if (checkAmpDocument.isAmpDoc) {
    amphtmlValidator.getInstance().then(
        (validator: AmpValidatorTypes.AmpValidator) => {
      const errors: AmpValidatorTypes.AmpValidatorValidationResultError[] =
          validator.validateString(
          text, checkAmpDocument.ampDocTypeParsed).errors;

      const diagnostics = (errors.length === 0) ?
          cleanupDiagnostics() :
          buildDiagnostics(errors, checkAmpDocument.ampDocType);

      connection.sendDiagnostics({ uri, diagnostics });
    });
  } else {
    connection.sendDiagnostics({ uri, diagnostics: cleanupDiagnostics() });
  }
}

/**
 * Cleans up any previous diagnostics if no more issues.
 */
function cleanupDiagnostics() {
  let diagnostics: Diagnostic[] = [];
  return diagnostics;
}

/**
 * Builds Diagnostics for available errors.
 * @param errors
 * @param docType
 */
function buildDiagnostics(
    errors: AmpValidatorTypes.AmpValidatorValidationResultError[] = [],
    docType: string):
    Diagnostic[] {
  let diagnostics: Diagnostic[] = [];
  errors.forEach(
      (error: AmpValidatorTypes.AmpValidatorValidationResultError) => {
    diagnostics.push(makeDiagnostic(error, docType));
  });
  connection.sendNotification("AMPHTML.VALIDATION", [errors]);
  return diagnostics;
}

// Make the text document manager listen on the connection
// for open, change and close text document events.
documents.listen(connection);

// Listen on the connection.
connection.listen();
