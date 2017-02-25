'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fire(eventName) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { rootState: {}, currentState: {}, payload: {}, nextState: {} };

  // console.log('========== Fire event :'+eventName, state, json);
  return _plugins2.default.fire(eventName, opts).then(function (opts) {
    // console.info(eventName, 'fire.plugins', opts)
    return opts;
  });
}

exports.default = {
  register: _plugins2.default.register,
  on: _plugins2.default.on,
  fire: fire
};