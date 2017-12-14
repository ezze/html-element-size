# html-element-size

[![NPM Version](https://badge.fury.io/js/html-element-size.svg)](https://badge.fury.io/js/html-element-size)
[![Build Status](https://travis-ci.org/ezze/html-element-size.svg?branch=develop)](https://travis-ci.org/ezze/html-element-size)
[![Coverage Status](https://coveralls.io/repos/github/ezze/html-element-size/badge.svg?branch=develop)](https://coveralls.io/github/ezze/html-element-size?branch=develop)

Helper function to get size of unvisible HTML element or HTML element not attached to DOM.

## Installation

```bash
npm install html-element-size --save
```
    
## Usage

- require with Node.js: 

    ```javascript
    var htmlElementSize = require('html-element-size');
    ```

- in browser include `dist/html-element-size.js` or `dist/html-element-size.min.js` script:

    ```javascript
    var htmlElementSize = window.htmlElementSize;
    ```
    
and then    
    
```javascript    
var size = htmlElementSize(document.querySelector('.my-element'), {
    removeClass: 'my-element-hidden',
    addClass: 'my-element-some-class'
});
console.log(size); // => { width: 200; height: 100 }
```

## Building

In order to build library run:
                                          
    npm run build
    
## Testing
    
Run tests:
    
    npm test
   
Run tests coverage:

    npm run test:coverage
    
## Contributing
    
Before making a pull request, please, be sure that your changes are rebased to `develop` branch.

## License

[MIT](LICENSE)
