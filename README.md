# html-element-size

[![npm](https://img.shields.io/npm/v/html-element-size.svg)](https://www.npmjs.com/package/html-element-size)
[![Travis CI](https://img.shields.io/travis/ezze/html-element-size/develop.svg)](https://travis-ci.org/ezze/html-element-size)
[![Coveralls](https://img.shields.io/coveralls/github/ezze/html-element-size/develop.svg)](https://coveralls.io/github/ezze/html-element-size)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

Helper function to get size of unvisible HTML element or HTML element not attached to DOM.

## Installation

```
npm install html-element-size
```
    
## Usage

- ES6:

   ```ecmascript 6
   import htmlElementSize from 'html-element-size';
   const size = htmlElementSize(document.querySelector('.my-element'), {
       removeClass: 'my-element-hidden',
       addClass: 'my-element-some-class'
   });
   console.log(size); // => { width: 200; height: 100 }
   ```

- Common.js: 

   ```javascript 1.5
   var htmlElementSize = require('html-element-size');
   var size = htmlElementSize(document.querySelector('.my-element'), {
       removeClass: 'my-element-hidden',
       addClass: 'my-element-some-class'
   });
    ```

- Browser (include `dist/html-element-size.js` or `dist/html-element-size.min.js`):

   ```javascript 1.5
   var htmlElementSize = window.htmlElementSize;
   var size = htmlElementSize(document.querySelector('.my-element'), {
       removeClass: 'my-element-hidden',
       addClass: 'my-element-some-class'
   });
   console.log(size); // => { width: 200; height: 100 }
   ```

## Building

In order to build library run:

```
npm run build
```
    
## Testing
    
Run tests:
    
    npm test
   
Run tests with coverage:

    npm run test:coverage
    
## Contributing
    
Before making a pull request, please, be sure that you start from `develop` branch.

## License

[MIT](LICENSE)
