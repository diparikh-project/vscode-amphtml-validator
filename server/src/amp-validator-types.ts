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

/**
 * AMP HTML Validator types.
 * Ref: https://github.com/ampproject/amphtml/blob/master/validator/nodejs/index.js
 */

/**
 * Ref: https://github.com/ampproject/amphtml/blob/master/validator/nodejs/index.js#L171
 */
export enum AmpValidatorValidationResultErrorSeverity {
  UNKNOWN_SEVERITY = 'UNKNOWN_SEVERITY',
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}

/**
 * Ref: https://github.com/ampproject/amphtml/blob/master/validator/validator.proto#L580
 */
export enum AmpValidatorValidationErrorCode {
  UNKNOWN = 'UNKNOWN',
  GENERIC = 'GENERIC',
  DISALLOWED_HTML_WITH_AMP_EQUIVALENT = 'DISALLOWED_HTML_WITH_AMP_EQUIVALENT',
  DISALLOWED_HTML = 'DISALLOWED_HTML',
  AUTHOR_STYLESHEET_PROBLEM = 'AUTHOR_STYLESHEET_PROBLEM',
  MANDATORY_AMP_TAG_MISSING_OR_INCORRECT = 'MANDATORY_AMP_TAG_MISSING_OR_INCORRECT',
  AMP_TAG_PROBLEM = 'AMP_TAG_PROBLEM',
  CUSTOM_JAVASCRIPT_DISALLOWED = 'CUSTOM_JAVASCRIPT_DISALLOWED',
  AMP_LAYOUT_PROBLEM = 'AMP_LAYOUT_PROBLEM',
  AMP_HTML_TEMPLATE_PROBLEM = 'AMP_HTML_TEMPLATE_PROBLEM',
  DEPRECATION = 'DEPRECATION'
}

/**
 * Ref: https://github.com/ampproject/amphtml/blob/master/validator/nodejs/index.js#L256
 */
export enum AmpValidatorValidationHtmlFormat {
  AMP = 'AMP',
  AMP4ADS = 'AMP4ADS',
  AMP4EMAIL = 'AMP4EMAIL',
  EXPERIMENTAL = 'EXPERIMENTAL' // Not yet implemented
}

/**
 * Ref: https://github.com/ampproject/amphtml/blob/master/validator/nodejs/index.js#L154
 */
export enum AmpValidatorValidationResultStatus {
  UNKNOWN = 'UNKNOWN',
  PASS = 'PASS',
  FAIL = 'FAIL'
}

/**
 * Ref: https://github.com/ampproject/amphtml/blob/master/validator/nodejs/index.js#L169
 */
export interface AmpValidatorValidationResultError {
  category?: string;
  code: AmpValidatorValidationErrorCode;
  col: number;
  line: number;
  dataAmpReportTestValue?: string;
  params: string[];
  severity: AmpValidatorValidationResultErrorSeverity;
  specUrl: string;
  message: string;
}

/**
 * https://github.com/ampproject/amphtml/blob/master/validator/nodejs/index.js#L152
 * Note: Additional params `specFileRevision`, `validatorRevision`.
 */
export interface AmpValidatorValidationResult {
  errors: AmpValidatorValidationResultError[];
  specFileRevision: number;
  status: AmpValidatorValidationResultStatus;
  validatorRevision: number;
}

/**
 * Ref: https://github.com/ampproject/amphtml/blob/master/validator/nodejs/index.js#L263
 */
export interface AmpValidatorValidateString {
  (
    text: string,
    format?: AmpValidatorValidationHtmlFormat
  ): AmpValidatorValidationResult;
}

/**
 * Ref: https://github.com/ampproject/amphtml/blob/master/validator/nodejs/index.js#L236
 */
export interface AmpValidator {
  validateString: AmpValidatorValidateString;
}
