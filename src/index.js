import manager from './manager'

function fire (eventName, opts = {rootState: {}, currentState: {}, payload: {}, nextState: {}}) {
  // console.log('========== Fire event :'+eventName, state, json);
  return manager.fire(eventName, opts)
  .then(opts => {
    return opts
  })
}

function fireSync (eventName, opts = {rootState: {}, currentState: {}, payload: {}, nextState: {}}) {
  // console.log('========== Fire event :'+eventName, state, json);
  return manager.fireSync(eventName, opts);
}

export default {
  register: manager.register,
  on: manager.on,
  list: manager.list,
  fire,
  fireSync
}
