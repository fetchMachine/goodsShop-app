import { Action } from "redux";
export function reducer({ state = INITIAL_STATE, action }: { state: any; action: Action; }): any {
  switch (action.type) {
    default:
      return state;
  }
}
