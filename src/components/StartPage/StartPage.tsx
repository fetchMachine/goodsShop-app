import React from "react";
import { MenuSide } from "../Menu";
import { GoodCard } from "components/Card/Card";
import { useSelector } from "react-redux";
import { StoreSelectors } from "store";
import { Link } from "react-router-dom";



export const StartPage: React.FC = () => {
 

  return (
    <>
      <div style={{ display: "flex", padding: "20px" }}>
        <MenuSide id={0} type={""} label={""} />
        <img
          style={{ width: "81%", height: "470px" }}
          src="https://storge.pic2.me/c/1360x800/126/59ee6feec1016.jpg"
          alt=""
        />
      </div>
      {/* {goodsCategory.map((image: { category: { label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; items: any[]; }) => (
        <div>
          <h2 style={{ textAlign: "center" }}>{image.category.label} </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {image.items.map((item) => (
              <Link to={`/${item.category_type}/${item.id}`}>
                <GoodCard
                  id={item.id}
                  label={item.label}
                  price={item.price}
                  img={item.img}
                  category_type={item.category_type}
                  discription={item.discription}
                ></GoodCard>
              </Link>
            ))}
          </div>
        </div>
      ))} */}
    </>
  );
};
