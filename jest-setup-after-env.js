/* eslint-disable import/no-extraneous-dependencies */

// server for mocking API
import { server } from './src/api/mock/server'

// Jest-Dom lib
require('@testing-library/jest-dom/extend-expect')

// starting, resetting and closing server in each test for mocking API
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
