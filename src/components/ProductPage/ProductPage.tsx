import React, { useEffect } from "react";
import { GoodCard } from "components/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { GoodsActions } from "store/goodsSlice";
import {StoreSelectors} from "../../store"

interface ProductsPageType {
  category_type: string,
  id: number,
}
export const ProductPage: React.FC = () => {

  useEffect(() => {
    dispatch(GoodsActions.fetchGoods)
}, []) 

  const popularCategories = useSelector(StoreSelectors.getPopularCategories);
  const { type, id } = useParams();
  const good = popularCategories.items.find((el: ProductsPageType) => el.category_type === type && (el.id).toString() === id)

  const navigate = useNavigate();
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


function dispatch(fetchGoods: any) {
  throw new Error("Function not implemented.");
}

