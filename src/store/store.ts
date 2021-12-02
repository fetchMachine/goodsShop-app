import { createStore, combineReducers, applyMiddleware } from 'redux'
import { menuCategoriesReducer } from './menuCategories'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    menuCategories: menuCategoriesReducer,
})
export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, applyMiddleware(thunk))