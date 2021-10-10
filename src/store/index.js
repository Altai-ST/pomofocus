import { combineReducers, createStore } from 'redux'
import { TimeManage } from './reducers'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    TimeManage,
    form: formReducer,
})

export let store = createStore(reducers)

