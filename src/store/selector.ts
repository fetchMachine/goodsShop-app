import { RootStore } from "./store";

export const getCategories = (state: RootStore) => state.categories;

export const getGoodsCategory = (state: RootStore) => state.goodsCategory 