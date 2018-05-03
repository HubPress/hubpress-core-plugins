'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fire(eventName) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { rootState: {}, currentState: {}, payload: {}, nextState: {} };

  // console.log('========== Fire event :'+eventName, state, json);
  return _manager2.default.fire(eventName, opts).then(function (opts) {
    return opts;
  });
}

function fireSync(eventName) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { rootState: {}, currentState: {}, payload: {}, nextState: {} };

  // console.log('========== Fire event :'+eventName, state, json);
  return _manager2.default.fireSync(eventName, opts);
}

exports.default = {
  register: _manager2.default.register,
  on: _manager2.default.on,
  list: _manager2.default.list,
  fire: fire,
  fireSync: fireSync
};