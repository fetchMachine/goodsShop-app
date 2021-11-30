import { createStore } from "redux";
import { reducer } from "./reducer";



export const store = createStore(reducer);

export type RootStore = ReturnType<typeof store.getState>;