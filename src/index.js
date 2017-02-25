import plugins from './plugins'

function fire (eventName, opts = {rootState: {}, currentState: {}, payload: {}, nextState: {}}) {
  // console.log('========== Fire event :'+eventName, state, json);
  return plugins.fire(eventName, opts)
  .then(opts => {
    // console.info(eventName, 'fire.plugins', opts)
    return opts
  })
}

export default {
  register: plugins.register,
  on: plugins.on,
  fire
}
