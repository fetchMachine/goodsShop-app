import { Action } from "redux";

interface State {
  categories: { id: number; type: string; label: string }[];
  goodsCategory : { category: {id: number; type: string; label: string },items:{id:number, category_type:string, price:number, label:string, img:string}[] }[];
  
}

const INITIAL_STATE: State = {
  categories: [
    { id: 1, type: "house", label: " Дом, сад, зоотовары" },
    { id: 2, type: "children", label: "Детям и мамам" },
    { id: 3, type: "cosmetics", label: "Косметика, парфюмерия" },
    { id: 4, type: "souvenirs", label: "Сувениры, галантерея" },
    { id: 5, type: "books", label: "Книги" },
    { id: 6, type: "products", label: "Продукты, деликатесы" },
    { id: 8, type: "electronics", label: "Техника, электроника" },
    { id: 9, type: "studies", label: "Канцтовары, учёба" },
    { id: 10, type: "sport", label: "Туризм, отдых, спорт" },
    { id: 11, type: "health", label: "Здоровье, медтехника" },
  ],
  
 goodsCategory : [
  {
    category: { id: 1, type: "house", label: "Дом, сад, зоотовары" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    category: { id: 2, type: "children", label: "Детям и мамам" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    category: { id: 3, type: "cosmetics", label: "Косметика, парфюмерия" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    category: { id: 4, type: "souvenirs", label: "Сувениры, галантерея" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    category: { id: 5, type: "books", label: "Книги" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    category: { id: 6, type: "products", label: "Продукты, деликатесы" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    category: { id: 8, type: "electronics", label: "Техника, электроника" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    category:  { id: 9, type: "studies", label: "Канцтовары, учёба" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
  
  {
    category: { id: 11, type: "health", label: "Здоровье, медтехника" },
    items: [
      {
        id: 1,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 3,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 4,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
      {
        id: 5,
        category_type: "house",
        label: "Коврик",
        price: 99,
        img: "https://source.unsplash.com/random",
      },
    ],
  },
],
}

export const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
}