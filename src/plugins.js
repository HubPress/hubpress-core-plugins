import Q from 'q';

let listeners = {};

function fire (event, opts = {state: {}, data:{}}) {
  return (listeners[event] || [])
  .reduce((memo, promise) => {
    return memo.then(promise);
  }, Q(opts))
}

function on (event, callback) {
  (listeners[event] || (listeners[event] = [])).push(callback);
}

function register (...plugins) {

  let hubpress = {
    on,
    fire
  };

  plugins.forEach( plugin => plugin(hubpress))

  return hubpress;
}

export default {
  register,
  fire,
  on
};
