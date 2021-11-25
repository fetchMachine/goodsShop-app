import React from "react";
import { GoodCard } from "components/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { StoreSelectors } from "store";
import { Link, useNavigate } from "react-router-dom";

export const ProductPage: React.FC = () => {
  const goodsCategory = useSelector(StoreSelectors.getGoodsCategory);
  const { category_type } = useParams();
  const itemsType = goodsCategory.find((el)=> el.items.find((category) => category.category_type === category_type));
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  if (!itemsType) {
    return (
      <div>
        Продукт не найден, вернуться 
        <Link to="/" onClick={handleClick}>
           назад
        </Link>
      </div>
    );
  }
  return (
    <div>
      {itemsType.items.map((item) => (
        <GoodCard
          id={item.id}
          label={item.label}
          price={item.price}
          img={item.img}
          category_type={item.category_type}
          discription={item.discription}
        ></GoodCard>
      ))}
    </div>
  );
};
