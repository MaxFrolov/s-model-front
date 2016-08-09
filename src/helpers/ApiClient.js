import superagent from 'superagent'
import config from '../config'
import { getAuthData } from './AuthData'

const methods = ['get', 'post', 'put', 'patch', 'del']

function formatUrl(path) {
  /*
   * For both client and server add /api to request url
   * Client request must be prefixed with /api to be proxied to API server by node
   * Server request url must be prefixed cause API server expects url to start with api
   */
  const adjustedPath = path[0] !== '/' ? '/api/' + path : '/api' + path
  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return adjustedPath
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class _ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path))

        if (!__SERVER__) {
          const authData = getAuthData()

          if (authData) {
            request.set('access-token', authData['access-token'])
            request.set('token-type', 'Bearer')
            request.set('client', authData.client)
            request.set('uid', authData.uid)
            request.set('expiry', authData.expiry)
          }
        }

        if (params) {
          request.query(params)
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'))
        }

        if (data) {
          request.send(data)
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body))
      }))
  }
}

const ApiClient = _ApiClient

export default ApiClient
