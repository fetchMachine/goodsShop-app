import { Action } from "redux";

interface State {
  books: { id: number; label: string }[];
  films: { id: number; label: string }[];
}

const INITIAL_STATE: State = {
  books: [
    { id: 1, label: "Незнайка на Луне" },
    { id: 2, label: "Дневник писателя" }
  ],
  films: [
    { id: 1, label: "Кто подставил кролика Роджера" },
    { id: 2, label: "Свинка Пеппа" }
  ]
};

export const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};