
import { RootStore } from './store'

export const getPopularCategories = (state: RootStore) => state.categories

export const getCategories = (state: RootStore) => state.popularCategories
