# FAQ

## Q. What is this VSCode extension for?
  > This extension enables authoring AMP HTML documents easy by validating as you type.
  > The **PROBLEMS** panel renders the issues with more details and the
  > row/column number of the document. Clicking on a row brings the document
  > in focus if not already focused and highlights the row of the issue.
  >
  > The AMP HTML validation reference is available at:
  > [AMP Validator](https://www.npmjs.com/package/amphtml-validator)
  > Current amphtml-validator version: **1.0.23** (As of 2018/08/01)

## Q. What are other options if I am not using VSCode?
  > AMP HTML has multiple options to validate the documents
  > 1. [In Browser validator](https://validator.ampproject.org/)
  > 2. URL: #development=1 (Chrome DevTools console)
  > 3. [Browser extension](https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc?hl=en) (Chrome & Opera)
  > 4. npm package (https://www.npmjs.com/package/amphtml-validator)
  > 5. gulp task [gulp-amp-html-validator](https://www.npmjs.com/package/gulp-amphtml-validator)
  > 6. [Playground](https://ampbyexample.com/playground/)
  > 7. [AMP Bin](https://ampb.in/)

## Q. Will I have any performance implications on VSCode by installing this extension?
  > This extension is using the [Language Server Protool](https://microsoft.github.io/language-server-protocol/),
  > which run in its own process to avoid performance cost.

## Q. How does this extension work?
  > This extension is activated when any `HTML` file is opened for the first time.
  > The extension first checks for the `<html>` tag and looks for presence of any
  > one of the valid AMP HTML attribute:
  >  * `⚡`, `amp`, `⚡4ads`, `amp4ads`, `⚡4email`, `amp4email`
  >
  > if found, the Language Server starts validating the entire content and generates
  > any issues in the **PROBLEMS** panel.
  >
  > The issue is removed when user fixes the error
  > Some times, fixing one issue can resolve multiple dependent issues.
  > Closing the document removes all the issues and rendered again when the
  > document is opened later on.
  > NOTE: Next release would support the configurable option to keep/remove the
  > issues in **PROBLEMS** panel when document is closed.



## Q. What file types are supported?

  > AMP HTML documents are HTML douments and by default VSCode supports `.html` and
  >`.htm` file extensions but VSCode can be extended to support other extension:
  >
  > Adding following VSCode setting (Menu item `Code -> Preerences -> Settings`) snippet, `.soy` and
  > `.cfml` file types will be supported for AMP HTML validation.
  >
  > ```json
  >     "files.associations": {
  >         "*.soy": "html",
  >         "*.cfml": "html"
  >     },
  > ```

## Q. Any plans to support other editors?
  > Since the extension is developed using the [Language Server Protool](https://microsoft.github.io/language-server-protocol/), it would be possible
  > to reuse the Language Server and develop extension/plugin for other
  > [Language Server Protool](https://microsoft.github.io/language-server-protocol/)>
  > supported editors in the future.
  > Currently there are no near future plans to support other editors.





