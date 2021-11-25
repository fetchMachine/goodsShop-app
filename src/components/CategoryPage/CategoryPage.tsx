import { GoodCard } from "components/Card";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { StoreSelectors } from "store";
import { Link, useNavigate } from "react-router-dom";

export const CategoryPage: React.FC = () => {
  const goodsCategory = useSelector(StoreSelectors.getGoodsCategory);
  const { type } = useParams();
  const thisType = goodsCategory.find((el) => el.category.type === type ) ;

  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  if (!thisType) {
    return (
      <div>
        Категория не найдена, вернуться
        <Link to="/" onClick={handleClick}>
          назад
        </Link>
      </div>
    );
  }
  return (
    <div>
      {thisType.items.map((item) => (
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
