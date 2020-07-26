/* eslint-disable global-require */
import wrapWithProvider from './wrap-with-provider'

import './src/styles/main.scss'

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./src/api/mock/browser')
  worker.start()
}

export const wrapRootElement = wrapWithProvider
