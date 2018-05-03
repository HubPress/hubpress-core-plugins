import Promise from 'bluebird'
import _ from 'lodash'

const registeredPlugins = []
const listeners = {
  '*': []
}

function fire (event, opts = {rootState: {}, currentState: {}, payload: {}}) {
  const nextState = _.cloneDeep(opts.nextState || opts.currentState)
  const fullyOpts = Object.assign({}, _.cloneDeep(opts), {event, nextState})

  listeners[event] = listeners[event] || []
  if (!listeners[event].length) {
    console.info(`No plugin have a callback for the event ${event}`)
    listeners[event].push(_opts => {
      console.log(`Default event function for ${event}`, _opts)
      return _opts
    })
  }

  return (listeners[event].concat(listeners['*']))
  .reduce((memo, promise) => {
    return memo.then(promise)
  }, Promise.resolve(fullyOpts))
}


function fireSync (event, opts = {rootState: {}, currentState: {}, payload: {}}) {
  const nextState = _.cloneDeep(opts.nextState || opts.currentState)
  const fullyOpts = Object.assign({}, _.cloneDeep(opts), {event, nextState})

  listeners[event] = listeners[event] || []
  if (!listeners[event].length) {
    console.info(`No plugin have a callback for the event ${event}`)
    listeners[event].push(_opts => {
      console.log(`Default event function for ${event}`, _opts)
      return _opts
    })
  }

  return (listeners[event].concat(listeners['*']))
  .reduce((memo, _callback) => {
    const pluginOpts = _callback(memo)
    return Object.assign(memo, _callback)
  }, fullyOpts)
}

function on (event, callback) {
  (listeners[event] || (listeners[event] = [])).push(callback)
}

function register (...plugins) {
  const context = {
    on,
    fire,
    fireSync
  }

  registeredPlugins.push(...plugins.map(plugin => plugin(context)))

  return context
}

function list () {
  return registeredPlugins.map(plugin => ({
    name: plugin && plugin.getName && plugin.getName() || 'Plugin without a name'
  }))
}

export default {
  register,
  fire,
  fireSync,
  on,
  list
}
