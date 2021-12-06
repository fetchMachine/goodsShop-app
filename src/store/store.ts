import { createStore, combineReducers, applyMiddleware } from 'redux'
import { menuCategoriesReducer } from './сategoriesSlice'
import thunk from 'redux-thunk'
import { goodsReducer } from './goodsSlice'

const rootReducer = combineReducers({
    menuCategories: menuCategoriesReducer,
    goods: goodsReducer,
})
export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, applyMiddleware(thunk))