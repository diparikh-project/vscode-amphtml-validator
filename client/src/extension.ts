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

import * as path from 'path';
import {
  ExtensionContext,
  workspace
} from 'vscode';

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from 'vscode-languageclient';

// Reference to the client. Created on activation and removed on deactivation.
let client: LanguageClient;

/**
 * Executes this function on activation as defined in `activationEvents`.
 * @param context
 */
export function activate(context: ExtensionContext) {
  let serverModule = context.asAbsolutePath(
    path.join('server', 'out', 'server.js')
  );

  // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging.
  let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

  // Get file types to lint from user settings.
  // TODO(diparikh): Implement amphtml.validator.documentSelector setting.
    //let config = workspace.getConfiguration('amphtml.validator');
    //let languages: string[] = config.get('documentSelector');
    //let documentSelector =
    //    languages.map(language => ({ language, scheme: 'file' }));
  let documentSelector = [{language: 'html', scheme: 'file'}];

  let serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions
    }
  };

  let clientOptions: LanguageClientOptions = {
    documentSelector,
    synchronize: {
      configurationSection: 'amphtml.validator',
      // Notify the server about file changes to '.clientrc files contained in the workspace.
      fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
    }
  };

  let forceDebug = false;
  client = new LanguageClient(
    'AMPHTML-Validator',
    'AMP HTML Validator',
    serverOptions,
    clientOptions,
    forceDebug
  );

  client.start();
}

/**
 * Cleans up the resources on extension deactivation.
 */
export function deactivate(): Thenable<void> {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
