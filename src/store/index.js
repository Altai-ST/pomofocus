import { combineReducers, createStore } from 'redux'
import { TimeManage } from './reducers'

const reducers = combineReducers({
    TimeManage,
})

export let store = createStore(reducers)

