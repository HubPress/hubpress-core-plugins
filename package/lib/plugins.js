'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listeners = {
  '*': []
};

function fire(event) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { rootState: {}, currentState: {}, payload: {} };

  var nextState = opts.nextState || _lodash2.default.cloneDeep(opts.currentState);
  var fullyOpts = Object.assign(opts, { event: event, nextState: nextState });

  listeners[event] = listeners[event] || [];
  if (!listeners[event].length) {
    console.info('No plugin have a callback for the event ' + event);
    listeners[event].push(function (_opts) {
      console.log('Default event function for ' + event, _opts);
      return _opts;
    });
  }

  return listeners[event].concat(listeners['*']).reduce(function (memo, promise) {
    return memo.then(promise);
  }, _bluebird2.default.resolve(fullyOpts));
}

function fireSync(event) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { rootState: {}, currentState: {}, payload: {} };

  var nextState = opts.nextState || _lodash2.default.cloneDeep(opts.currentState);
  var fullyOpts = Object.assign(opts, { event: event, nextState: nextState });

  listeners[event] = listeners[event] || [];
  if (!listeners[event].length) {
    console.info('No plugin have a callback for the event ' + event);
    listeners[event].push(function (_opts) {
      console.log('Default event function for ' + event, _opts);
      return _opts;
    });
  }

  return listeners[event].concat(listeners['*']).reduce(function (memo, _callback) {
    var pluginOpts = _callback(memo);
    return Object.assign(memo, _callback);
  }, fullyOpts);
}

function on(event, callback) {
  (listeners[event] || (listeners[event] = [])).push(callback);
}

function register() {
  var context = {
    on: on,
    fire: fire,
    fireSync: fireSync
  };

  for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  plugins.forEach(function (plugin) {
    return plugin(context);
  });

  return context;
}

exports.default = {
  register: register,
  fire: fire,
  fireSync: fireSync,
  on: on
};