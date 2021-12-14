import { RootState } from "../store"
export const getCartBranch = (state: RootState) => state
export const getCart = (state: RootState) => getCartBranch(state).data