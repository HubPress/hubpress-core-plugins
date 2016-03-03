import plugins from './plugins'

function fire (eventName, state, json) {
  //console.log('========== Fire event :'+eventName, state, json);
  return plugins.fire(eventName, {
    state,
    data: json
  })
  .then(opts => opts.data);
}

// Config
function fireRequestConfig (state, payload) {
  return fire('requestConfig', state, payload);
}

function fireReceiveConfig (state, payload) {
  return fire('receiveConfig', state, payload);
}

function fireRequestSaveConfig (state, payload) {
  return fire('requestSaveConfig', state, payload);
}

function fireReceiveSaveConfig (state, payload) {
  return fire('receiveSaveConfig', state, payload);
}

// Theme
function fireRequestTheme (state, payload) {
  return fire('requestTheme', state, payload);
}

function fireReceiveTheme (state, payload) {
  return fire('receiveTheme', state, payload);
}

// SavedAuth
function fireRequestSavedAuth (state, payload) {
  return fire('requestSavedAuth', state, payload);
}

function fireReceiveSavedAuth (state, payload) {
  return fire('receiveSavedAuth', state, payload);
}

// Remote Synchronization
function fireRequestRemoteSynchronization (state, payload) {
  return fire('requestRemoteSynchronization', state, payload);
}

function fireReceiveRemoteSynchronization (state, payload) {
  return fire('receiveRemoteSynchronization', state, payload);
}

function fireRequestSaveRemotePost (state, payload) {
  return fire('requestSaveRemotePost', state, payload);
}

function fireReceiveSaveRemotePost (state, payload) {
  return fire('receiveSaveRemotePost', state, payload);
}

function fireRequestPublishPost (state, payload) {
  return fire('requestPublishPost', state, payload);
}

function fireReceivePublishPost (state, payload) {
  return fire('receivePublishPost', state, payload);
}

function fireRequestLocalPublishedPosts (state, payload) {
  return fire('requestLocalPublishedPosts', state, payload);
}

function fireReceiveLocalPublishedPosts (state, payload) {
  return fire('receiveLocalPublishedPosts', state, payload);
}

// Rendering
function fireRequestRenderingDocuments (state, payload) {
  return fire('requestRenderingDocuments', state, payload);
}

function fireReceiveRenderingDocuments (state, payload) {
  return fire('receiveRenderingDocuments', state, payload);
}

function fireRequestRenderingPost (state, payload) {
  return fire('requestRenderingPost', state, payload);
}

function fireReceiveRenderingPost (state, payload) {
  return fire('receiveRenderingPost', state, payload);
}

// Local
function fireRequestLocalSynchronization (state, payload) {
  return fire('requestLocalSynchronization', state, payload);
}

function fireReceiveLocalSynchronization (state, payload) {
  return fire('receiveLocalSynchronization', state, payload);
}

// Local Posts
function fireRequestLocalPosts (state, payload) {
  return fire('requestLocalPosts', state, payload);
}

function fireReceiveLocalPosts (state, payload) {
  return fire('receiveLocalPosts', state, payload);
}

function fireRequestLocalPost (state, payload) {
  return fire('requestLocalPost', state, payload);
}

function fireReceiveLocalPost (state, payload) {
  return fire('receiveLocalPost', state, payload);
}

function fireRequestDeleteLocalPost (state, payload) {
  return fire('requestDeleteLocalPost', state, payload);
}

function fireReceiveDeleteLocalPost (state, payload) {
  return fire('receiveDeleteLocalPost', state, payload);
}

function fireRequestSaveLocalPost (state, payload) {
  return fire('requestSaveLocalPost', state, payload);
}

function fireReceiveSaveLocalPost (state, payload) {
  return fire('receiveSaveLocalPost', state, payload);
}

// Selected Post
function fireRequestSelectedPost (state, payload) {
  return fire('requestSelectedPost', state, payload);
}

function fireReceiveSelectedPost (state, payload) {
  return fire('receiveSelectedPost', state, payload);
}

// Authentication
function fireRequestAuthentication (state, payload) {
  return fire('requestAuthentication', state, payload);
}

function fireReceiveAuthentication (state, payload) {
  // Do not fire event if OTP is required
  if (payload.twoFactorRequired) {
    return payload;
  }

  return fire('receiveAuthentication', state, payload);
}

function fireRequestLogout (state, payload) {
  return fire('requestLogout', state, payload);
}

function fireReceiveLogout (state, payload) {
  return fire('receiveLogout', state, payload);
}

// Generators
function fireRequestGenerateIndex (state, payload) {
  return fire('requestGenerateIndex', state, payload);
}

function fireReceiveGenerateIndex (state, payload) {
  return fire('receiveGenerateIndex', state, payload);
}

function fireRequestGeneratePost (state, payload) {
  return fire('requestGeneratePost', state, payload);
}

function fireReceiveGeneratePost (state, payload) {
  return fire('receiveGeneratePost', state, payload);
}

function fireRequestGeneratePosts (state, payload) {
  return fire('requestGeneratePosts', state, payload);
}

function fireReceiveGeneratePosts (state, payload) {
  return fire('receiveGeneratePosts', state, payload);
}

function fireRequestGenerateTags (state, payload) {
  return fire('requestGenerateTags', state, payload);
}

function fireReceiveGenerateTags (state, payload) {
  return fire('receiveGenerateTags', state, payload);
}

function fireRequestGenerateAuthors (state, payload) {
  return fire('requestGenerateAuthors', state, payload);
}

function fireReceiveGenerateAuthors (state, payload) {
  return fire('receiveGenerateAuthors', state, payload);
}

function fireRequestSaveRemotePublishedElements (state, payload) {
  return fire('requestSaveRemotePublishedElements', state, payload);
}

function fireReceiveSaveRemotePublishedElements (state, payload) {
  return fire('receiveSaveRemotePublishedElements', state, payload);
}

function fireRequestDeleteRemotePublishedPost (state, payload) {
  return fire('requestDeleteRemotePublishedPost', state, payload);
}

function fireReceiveDeleteRemotePublishedPost (state, payload) {
  return fire('receiveDeleteRemotePublishedPost', state, payload);
}

function fireRequestDeleteRemotePost (state, payload) {
  return fire('requestDeleteRemotePost', state, payload);
}

function fireReceiveDeleteRemotePost (state, payload) {
  return fire('receiveDeleteRemotePost', state, payload);
}

export default {
  register: plugins.register,
  fire: plugins.fire,
  on: plugins.on,
  //-----------------
  fireRequestConfig,
  fireReceiveConfig,
  fireRequestSaveConfig,
  fireReceiveSaveConfig,
  fireRequestTheme,
  fireReceiveTheme,
  fireRequestSavedAuth,
  fireReceiveSavedAuth,
  fireRequestRemoteSynchronization,
  fireReceiveRemoteSynchronization,
  fireRequestRenderingDocuments,
  fireReceiveRenderingDocuments,
  fireRequestRenderingPost,
  fireReceiveRenderingPost,
  fireRequestLocalSynchronization,
  fireReceiveLocalSynchronization,
  fireRequestLocalPosts,
  fireReceiveLocalPosts,
  fireRequestLocalPost,
  fireReceiveLocalPost,
  fireRequestDeleteLocalPost,
  fireReceiveDeleteLocalPost,
  fireRequestSaveLocalPost,
  fireReceiveSaveLocalPost,
  fireRequestSaveRemotePost,
  fireReceiveSaveRemotePost,
  fireRequestPublishPost,
  fireReceivePublishPost,
  fireRequestLocalPublishedPosts,
  fireReceiveLocalPublishedPosts,
  fireRequestSelectedPost,
  fireReceiveSelectedPost,
  fireRequestAuthentication,
  fireReceiveAuthentication,
  fireRequestLogout,
  fireReceiveLogout,
  fireRequestGenerateIndex,
  fireReceiveGenerateIndex,
  fireRequestGeneratePost,
  fireReceiveGeneratePost,
  fireRequestGeneratePosts,
  fireReceiveGeneratePosts,
  fireRequestGenerateTags,
  fireReceiveGenerateTags,
  fireRequestGenerateAuthors,
  fireReceiveGenerateAuthors,
  fireRequestSaveRemotePublishedElements,
  fireReceiveSaveRemotePublishedElements,
  fireRequestDeleteRemotePublishedPost,
  fireReceiveDeleteRemotePublishedPost,
  fireRequestDeleteRemotePost,
  fireReceiveDeleteRemotePost
}
