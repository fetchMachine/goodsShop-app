import React from "react";
import { Menu } from "../Menu";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { GoodCard} from "components/Card/Card";
import { useSelector } from "react-redux";
import { StoreSelectors } from "store";

export const StartPage: React.FC = () =>{
  
const categories = useSelector(StoreSelectors.getCategories)
const goodsCategory = useSelector(StoreSelectors.getGoodsCategory)


    return (
      <>
        <Header />
        <div style={{display:'flex', padding:'20px' }}>
        <Menu categories={categories} />
        <img
          style={{ width: "70%", height: "470px" }}
          src="https://storge.pic2.me/c/1360x800/126/59ee6feec1016.jpg"
          alt=""
        />
         </div>
        {goodsCategory.map((image) => (
          <div>
            <h2 style={{ textAlign: "center" }}>{image.category.label} </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {image.items.map((item) => (
              <GoodCard  id={item.id} label={item.label} price={item.price} img={item.img} category_type={item.category_type}></GoodCard>
              ))}
            </div>
          </div>
        ))}
        <Footer />
      </>
    );
  }


