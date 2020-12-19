(function (modules) {
  function require(id) {
    const [fn, mapping] = modules[id];

    function localRequire(relativePath) {
      return require(mapping[relativePath]);
    }

    const module = {
      exports: {},
    };

    fn(localRequire, module, module.exports);

    return module.exports;
  }

  require(0);
})({
  0: [
    function (require, module, exports) {
      'use strict';

      var _message = require('./message.js');

      console.log((0, _message.helloMessage)());
    },
    { './message.js': 1 },
  ],
  1: [
    function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.helloMessage = helloMessage;

      var _name = require('./name.js');

      function helloMessage() {
        return 'hello ' + _name.name;
      }
    },
    { './name.js': 2 },
  ],
  2: [
    function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.name = void 0;
      var name = 'dpyzo0o';
      exports.name = name;
    },
    {},
  ],
});
