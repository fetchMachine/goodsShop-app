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
    { id: 7, type: "garden", label: "Дом, сад, зоотовары" },
    { id: 8, type: "electronics", label: "Техника, электроника" },
    { id: 9, type: "studies", label: "Канцтовары, учёба" },
    { id: 10, type: "sport", label: "Туризм, отдых, спорт" },
    { id: 11, type: "health", label: "Здоровье, медтехника" },
  ],
  
 goodsCategory : [
  {
    category: { id: 1, type: "house", label: "Дом" },
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
    category: { id: 2, type: "house", label: "Канцтовары, учёба" },
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
    category: { id: 2, type: "house", label: "Косметика, парфюмерия" },
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
    category: { id: 3, type: "house", label: "Книги" },
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
    category: { id: 4, type: "house", label: "Продукты питания, напитки" },
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
    category: { id: 5, type: "house", label: "Развлечения, творчество" },
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