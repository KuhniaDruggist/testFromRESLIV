import {combineReducers, createStore} from 'redux';
import {employeesReducer} from './employeesReducer';

const rootReducer = combineReducers({
    employeesPage: employeesReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);