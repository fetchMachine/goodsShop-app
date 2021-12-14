import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './сategoriesSlice'
import thunk from 'redux-thunk'
import { goodsReducer } from './goodsSlice'

const rootReducer = combineReducers({
    сategories: categoriesReducer ,
    goods: goodsReducer,
})
export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, applyMiddleware(thunk))