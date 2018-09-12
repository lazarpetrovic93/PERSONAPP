import {createStore, combineReducers, applyMiddleware } from 'redux'
import personReducer from '../src/reducers/personReducer'
import thunk from 'redux-thunk'


export default createStore(
  combineReducers({
    persons: personReducer,
  }),{}, applyMiddleware( thunk));