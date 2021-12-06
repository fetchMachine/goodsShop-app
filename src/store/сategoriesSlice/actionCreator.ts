import { MENU_CATEGORIES_ACTIONS } from './constants'

export const getMenuCategories = () => ({ type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES })

export const getMenuCategoriesFailure = () => ({
    type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES_FAILURE
})
