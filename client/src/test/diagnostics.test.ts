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

import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';

describe('Should get diagnostics for a valid empty ⚡ page', () => {
  const docUri = getDocUri('amp/amp-empty.html');

  it('Diagnoses amp/amp-empty.html for validation errors', async () => {
    await testDiagnostics(docUri, [
      {
        message:
          "⚡ : The mandatory tag 'head' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "⚡ : The mandatory tag 'link rel=canonical' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "⚡ : The mandatory tag 'meta charset=utf-8' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "⚡ : The mandatory tag 'meta name=viewport' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "⚡ : The mandatory tag 'body' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "⚡ : The mandatory tag 'noscript enclosure for boilerplate' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/?format=websites",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "⚡ : The mandatory tag 'head > style[amp-boilerplate]' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/?format=websites",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "⚡ : The mandatory tag 'noscript > style[amp-boilerplate]' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/?format=websites",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "⚡ : The mandatory tag 'amphtml engine script' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_TAG_MISSING',
      },
    ]);
  });
});

describe('Should get diagnostics for a valid empty AMP page', () => {
  const docUri = getDocUri('amp/amp-empty-amp.html');

  it('Diagnoses amp/amp-empty-amp.html for validation errors', async () => {
    await testDiagnostics(docUri, [
      {
        message:
          "amp : The mandatory tag 'head' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "amp : The mandatory tag 'link rel=canonical' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "amp : The mandatory tag 'meta charset=utf-8' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "amp : The mandatory tag 'meta name=viewport' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "amp : The mandatory tag 'body' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "amp : The mandatory tag 'noscript enclosure for boilerplate' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/?format=websites",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "amp : The mandatory tag 'head > style[amp-boilerplate]' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/?format=websites",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "amp : The mandatory tag 'noscript > style[amp-boilerplate]' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/?format=websites",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
      {
        message:
          "amp : The mandatory tag 'amphtml engine script' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(17, 7, 17, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
    ]);
  });
});

describe('Should skip non-amp page', () => {
  const docUri = getDocUri('amp/non-amp.html');

  it('Skips NON AMP HTML amp/non-amp.html page', async () => {
    await testDiagnostics(docUri, []);
  });
});

describe('Should skip non-amp page invalid-attr1.html', () => {
  const docUri = getDocUri('amp/invalid-attr1.html');

  it('Skips NON AMP HTML amp/invalid-attr1.html page', async () => {
    await testDiagnostics(docUri, []);
  });
});

describe('Should skip non-amp page invalid-attr2.html', () => {
  const docUri = getDocUri('amp/invalid-attr2.html');

  it('Skips NON AMP HTML amp/invalid-attr2.html page', async () => {
    await testDiagnostics(docUri, []);
  });
});

describe('Should get diagnostics for invalid attributes and tags in AMP page', () => {
  const docUri = getDocUri('amp/amp-invalid-amp-list.html');

  it('Diagnoses amp/amp-invalid-amp-list.html for validation errors', async () => {
    await testDiagnostics(docUri, [
      {
        message:
          "⚡ : The parent tag of tag 'style amp-custom' is 'noscript', but it can only be 'head'. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#stylesheets",
        range: toRange(75, 6, 75, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MANDATORY_CDATA_MISSING_OR_INCORRECT',
      },
      {
        message:
          "⚡ : The attribute 'height' in tag 'amp-list' is set to the invalid value 'a48'. : https://amp.dev/documentation/components/amp-list",
        range: toRange(125, 4, 125, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'DISALLOWED_ATTR',
      },
      {
        message:
          "⚡ : The tag 'amp-list' requires including the 'amp-list' extension JavaScript. : https://amp.dev/documentation/components/amp-list",
        range: toRange(125, 4, 125, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'INVALID_ATTR_VALUE',
      },
      {
        message:
          "⚡ : Attribute 'template' in tag 'amp-list' contains a value that does not match any other tags on the page. : https://amp.dev/documentation/components/amp-list",
        range: toRange(125, 4, 125, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'MISSING_REQUIRED_EXTENSION',
      },
      {
        message: "⚡ : The tag 'amp-unknown' is disallowed.",
        range: toRange(143, 4, 143, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'DISALLOWED_TAG',
      },
      {
        message:
          "⚡ : The mandatory tag 'noscript > style[amp-boilerplate]' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/?format=websites",
        range: toRange(148, 7, 148, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡',
        code: 'TAG_REQUIRED_BY_MISSING',
      },
    ]);
  });
});

describe('Should get diagnostics for invalid tags in AMP page', () => {
  const docUri = getDocUri('amp/amp-invalid-style-href.html');

  it('Diagnoses amp/amp-invalid-style-href.html for validation errors', async () => {
    await testDiagnostics(docUri, [
      {
        message:
          "amp : The attribute 'href' in tag 'link rel=stylesheet for fonts' is set to the invalid value 'main.css'. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#custom-fonts",
        range: toRange(24, 4, 24, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'INVALID_ATTR_VALUE',
      },
      {
        message:
          "amp : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(25, 4, 25, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "amp : The mandatory tag 'amphtml engine script' is missing or incorrect. : https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/#required-markup",
        range: toRange(30, 7, 30, 12),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp',
        code: 'MANDATORY_TAG_MISSING',
      },
    ]);
  });
});

describe('Should get diagnostics for invalid attributes in ⚡4ads form', () => {
  const docUri = getDocUri('amp4ads/amp-form.html');

  it('Diagnoses amp4ads/amp-form.html for validation errors', async () => {
    await testDiagnostics(docUri, [
      {
        message:
          "⚡4ads : The attribute 'type' in tag 'input' is set to the invalid value 'image'. : https://amp.dev/documentation/components/amp-form/",
        range: toRange(46, 6, 46, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'INVALID_ATTR_VALUE',
      },
      {
        message:
          "⚡4ads : The attribute 'type' in tag 'input' is set to the invalid value 'password'. : https://amp.dev/documentation/components/amp-form/",
        range: toRange(50, 6, 50, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'INVALID_ATTR_VALUE',
      },
      {
        message:
          "⚡4ads : The attribute 'type' in tag 'input' is set to the invalid value 'file'. : https://amp.dev/documentation/components/amp-form/",
        range: toRange(51, 6, 51, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'INVALID_ATTR_VALUE',
      },
    ]);
  });
});

describe('Should get diagnostics for invalid scripts in ⚡4ads', () => {
  const docUri = getDocUri('amp4ads/no-script.html');

  it('Diagnoses amp4ads/no-script.html for validation errors', async () => {
    await testDiagnostics(docUri, [
      {
        message: "amp4ads : The tag 'noscript' is disallowed.",
        range: toRange(26, 4, 26, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp4ads',
        code: 'DISALLOWED_TAG',
      },
      {
        message: "amp4ads : The tag 'img' is disallowed.",
        range: toRange(28, 4, 28, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp4ads',
        code: 'DISALLOWED_TAG',
      },
      {
        message: "amp4ads : The tag 'noscript' is disallowed.",
        range: toRange(30, 4, 30, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp4ads',
        code: 'DISALLOWED_TAG',
      },
      {
        message: "amp4ads : The tag 'img' is disallowed.",
        range: toRange(31, 6, 31, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp4ads',
        code: 'DISALLOWED_TAG',
      },
      {
        message: "amp4ads : The tag 'noscript' is disallowed.",
        range: toRange(33, 4, 33, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp4ads',
        code: 'DISALLOWED_TAG',
      },
      {
        message: "amp4ads : The tag 'video' is disallowed.",
        range: toRange(34, 6, 34, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp4ads',
        code: 'DISALLOWED_TAG',
      },
      {
        message: "amp4ads : The tag 'audio' is disallowed.",
        range: toRange(35, 6, 35, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: 'amp4ads',
        code: 'DISALLOWED_TAG',
      },
    ]);
  });
});

describe('Should get diagnostics for ⚡4ads pixel ssr', () => {
  const docUri = getDocUri('amp4ads/amp-pixel-ssr.html');

  it('Diagnoses 4ads pixel ssr has no errors', async () => {
    await testDiagnostics(docUri, []);
  });
});

describe('Should get diagnostics for invalid extensions in ⚡4ads page', () => {
  const docUri = getDocUri('amp4ads/extensions.html');

  it('Diagnoses amp4ads/extensions.html for validation errors', async () => {
    await testDiagnostics(docUri, [
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(33, 2, 33, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(37, 2, 37, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(47, 2, 47, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(49, 2, 49, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(53, 2, 53, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(55, 2, 55, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(57, 2, 57, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(59, 2, 59, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(67, 2, 67, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(69, 2, 69, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(71, 2, 71, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(73, 2, 73, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(75, 2, 75, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(77, 2, 77, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(79, 2, 79, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(83, 2, 83, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(85, 2, 85, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(87, 2, 87, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(89, 2, 89, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(91, 2, 91, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(93, 2, 93, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(95, 2, 95, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(99, 2, 99, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(101, 2, 101, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(103, 2, 103, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(105, 2, 105, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(107, 2, 107, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(109, 2, 109, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(111, 2, 111, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'DISALLOWED_SCRIPT_TAG',
      },
      {
        message:
          "⚡4ads : Custom JavaScript is not allowed. : https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validation_errors/#custom-javascript-is-not-allowed",
        range: toRange(113, 2, 113, 7),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'EXTENSION_UNUSED',
      },
      {
        message:
          "⚡4ads : The extension 'amp-animation' was found on this page, but is unused. Please remove this extension.",
      range: toRange(119, 25, 119, 20),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'EXTENSION_UNUSED',
      },
      {
        message:
          "⚡4ads : The extension 'amp-lightbox' was found on this page, but is unused. Please remove this extension.",
      range: toRange(119, 25, 119, 20),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'EXTENSION_UNUSED',
      },
      {
        message:
          "⚡4ads : The extension 'amp-mustache' was found on this page, but is unused. Please remove this extension.",
      range: toRange(119, 25, 119, 20),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4ads',
        code: 'EXTENSION_UNUSED',
      },
    ]);
  });
});

describe('Should get diagnostics for invalid attributes in ⚡4email form', () => {
  const docUri = getDocUri('amp4email/amp-form.html');

  it('Diagnoses amp4email/amp-form.html for validation errors', async () => {
    await testDiagnostics(docUri, [
      {
        message:
          "⚡4email : Tag 'html' marked with attribute 'amp4email' is missing the corresponding attribute 'data-css-strict' for enabling strict CSS validation. This may become an error in the future. : https://github.com/ampproject/amphtml/issues/32587",
        range: toRange(16, 0, 16, 5),
        severity: vscode.DiagnosticSeverity.Warning,
      },
      {
        message:
          "⚡4email : The tag 'title' is deprecated - use 'Title tags in email have no meaning. This tag may become invalid in the future.' instead. : https://github.com/ampproject/amphtml/issues/22318",
        range: toRange(18, 4, 18, 9),
        severity: vscode.DiagnosticSeverity.Warning,
        source: '⚡4email',
        code: 'INVALID_ATTR_VALUE',
      },
      {
        message:
          "⚡4email : The attribute 'type' in tag 'input' is set to the invalid value 'image'. : https://amp.dev/documentation/components/amp-form/",
        range: toRange(45, 6, 45, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4email',
        code: 'INVALID_ATTR_VALUE',
      },
      {
        message:
          "⚡4email : The attribute 'type' in tag 'input' is set to the invalid value 'password'. : https://amp.dev/documentation/components/amp-form/",
        range: toRange(49, 6, 49, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4email',
        code: 'INVALID_ATTR_VALUE',
      },
      {
        message:
          "⚡4email : The attribute 'type' in tag 'input' is set to the invalid value 'file'. : https://amp.dev/documentation/components/amp-form/",
        range: toRange(50, 6, 50, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4email',
        code: 'INVALID_ATTR_VALUE',
      },
      {
        message:
          "⚡4email : The attribute 'xhr-verify' may not appear in tag 'form'. : https://amp.dev/documentation/components/amp-form",
        range: toRange(53, 4, 53, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4email',
        code: 'DISALLOWED_ATTR',
      },
      {
        message:
          "⚡4email : The attribute 'xhr-verify' may not appear in tag 'form'. : https://amp.dev/documentation/components/amp-form",
        range: toRange(57, 4, 57, 9),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4email',
        code: 'DISALLOWED_ATTR',
      },
      {
        message:
          "⚡4email : The attribute '[type]' may not appear in tag 'input'. : https://amp.dev/documentation/components/amp-form/",
        range: toRange(62, 6, 62, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4email',
        code: 'DISALLOWED_ATTR',
      },
      {
        message:
          "⚡4email : The attribute 'template' may not appear in tag 'div'.",
        range: toRange(72, 6, 72, 11),
        severity: vscode.DiagnosticSeverity.Error,
        source: '⚡4email',
        code: 'DISALLOWED_ATTR',
      },
    ]);
  });
});

function toRange(sLine: number, sChar: number, eLine: number, eChar: number) {
  const start = new vscode.Position(sLine, sChar);
  const end = new vscode.Position(eLine, eChar);
  return new vscode.Range(start, end);
}

async function testDiagnostics(
  docUri: vscode.Uri,
  expectedDiagnostics: vscode.Diagnostic[]
) {
  await activate(docUri);

  const actualDiagnostics = vscode.languages.getDiagnostics(docUri);

  expectedDiagnostics.forEach((expectedDiagnostic, i) => {
    const actualDiagnostic = actualDiagnostics[i];
    assert.equal(actualDiagnostic.message, expectedDiagnostic.message);
    assert.deepEqual(actualDiagnostic.range, expectedDiagnostic.range, `:${i}`);
    assert.equal(actualDiagnostic.severity, expectedDiagnostic.severity);
    // TODO(dparikh): Currently unused, could use in future.
    //assert.equal(actualDiagnostic.source, expectedDiagnostic.source);
    //assert.equal(actualDiagnostic.code, expectedDiagnostic.code);
  });
  assert.equal(actualDiagnostics.length, expectedDiagnostics.length);
}
