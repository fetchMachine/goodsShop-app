import React from "react";
import { GoodCard } from "components/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { StoreSelectors} from "./index";
import { Link, useNavigate } from "react-router-dom";

export const ProductPage: React.FC = () => {
  const popularCategories = useSelector(StoreSelectors.getPopularCategories);
  const { type, id } = useParams();
  const good = popularCategories.find((category)=> category.category.type === type)?.items.find((item) => item.id === Number(id));
  let navigate = useNavigate();
  function handleClick() {
    navigate("-1");
  }
  if (!good) {
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
    <Link to={`${good.category_type}/${good.id}`}>
        <GoodCard
          id={good.id}
          label={good.label}
          price={good.price}
          img={good.img}
          category_type={good.category_type}
          discription={good.discription}
        />
        </Link>
  );
};


