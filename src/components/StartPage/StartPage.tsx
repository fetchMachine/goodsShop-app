import React from "react";
import { Menu } from "../Menu";
import { Card } from "antd";
import { Header } from "../Header";
import { Footer } from "../Footer";
interface StartPageSate {}
export class StartPage extends React.Component<{}, StartPageSate> {
  static categories = [
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
  ];

  static goodsCategory = [
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
  ];

  render() {
    return (
      <>
        <Header />
        <Menu categories={StartPage.categories} />
        <img
          style={{ height: "470px" }}
          src="https://storge.pic2.me/c/1360x800/126/59ee6feec1016.jpg"
          alt=""
        />
        {StartPage.goodsCategory.map((image) => (
          <div>
            <h2 style={{ textAlign: "center" }}>{image.category.label} </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {image.items.map((item) => (
                <Card
                  id={item.id}
                  label={item.label}
                  price={item.price}
                  img={item.img}
                  category_type={item.category_type}
                />
              ))}
            </div>
          </div>
        ))}
        <Footer />
      </>
    );
  }
}
export default StartPage;
