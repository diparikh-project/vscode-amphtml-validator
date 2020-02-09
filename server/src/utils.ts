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
  TextDocument,
  Diagnostic,
  DiagnosticSeverity,
  Range
} from 'vscode-languageserver/lib/main';

import * as AmpValidatorTypes from './amp-validator-types';

interface AmpDoc {
  isAmpDoc: boolean;
  ampDocType: string;
  ampDocTypeParsed: AmpValidatorTypes.AmpValidatorValidationHtmlFormat;
}

/**
 * Checks if the current document passed the regExp so as to validate as an
 * AMP HTML document. The validation checks the <html> tag for any of the
 * (⚡4ads|amp4ads|⚡4email|amp4email|amp|⚡) attributes in the order and passes
 * the regex as soon as found first occurance (non-greedy).
 * Also, each attribute can have empty value, i.e. amp="".
 * @param textDocument
 */
export function isAmpHtmlDocument(textDocument: TextDocument): AmpDoc {
  const ampPattern = /.*?<html\s*.*?\s+(⚡4ads|amp4ads|⚡4email|amp4email|amp|⚡){1}(\s+|>|=)/gi;

  // Remove all comments, which might include <html> tag.
  // Non-greedy pattern to capture nested comments.
  const commentsPattern = /<!--([\s\S]*?)-->/gi;

  const text = textDocument.getText().replace(commentsPattern, '');
  const ampPatternResponse = ampPattern.exec(text);
  const ampDocType =
    ampPatternResponse === null
      ? ''
      : ampPatternResponse.length >= 1 && ampPatternResponse[1];

  const ampDocTypParsed = ampDocType.toUpperCase().replace(/⚡/, 'AMP');

  const ampDoc: AmpDoc = {
    isAmpDoc: ampDocType !== '',
    ampDocType: ampDocType,
    ampDocTypeParsed: <AmpValidatorTypes.AmpValidatorValidationHtmlFormat>(
      ampDocTypParsed
    )
  };

  return ampDoc;
}

/**
 * Gets the range of given error from the AMP validator.
 * @param error
 */
export function getRange(
  error: AmpValidatorTypes.AmpValidatorValidationResultError
): Range {
  return {
    start: {
      line: error.line - 1,
      character: error.col
    },
    end: {
      line: error.line - 1,
      character: error.col + 5
    }
  };
}

/**
 * Builds the Diagnostic object from AMP Validator error object.
 * The `errorUrl` should be clickable link, VS Code does not support yet.
 * Ref: https://github.com/Microsoft/vscode/issues/11847
 * @param error
 * @param docType
 */
export function makeDiagnostic(
  error: AmpValidatorTypes.AmpValidatorValidationResultError,
  docType: string
): Diagnostic {
  const errorUrl = error.specUrl ? ` : ${error.specUrl}` : '';
  return {
    severity:
      error.severity ==
      AmpValidatorTypes.AmpValidatorValidationResultErrorSeverity.ERROR
        ? DiagnosticSeverity.Error
        : DiagnosticSeverity.Warning,
    message: `${docType} : ${error.message}${errorUrl}`,
    range: getRange(error)
  };
}
