const { appReducer } = require('./reducers/reducers')
const { thunk } = require('./middleware/thunk')
const { createStore, applyMiddleware } = require('redux')
const { logger } = require('redux-logger')

const store = createStore(appReducer, {}, applyMiddleware(thunk, logger))

module.exports = {
	store	
}


