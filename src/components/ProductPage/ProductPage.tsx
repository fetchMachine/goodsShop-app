import React, { useEffect } from "react";
import { GoodCard } from "components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";

interface ProductsPageType {
  category_type: string,
  id: number,
}
export const ProductPage: React.FC = () => {
 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GoodsActions.fetchGoods())
  },[])

  const goods = useSelector(GoodsSelectors.getGoodsBranch)
  const { type, id } = useParams();
  const navigate = useNavigate();
  const good = goods.data.find((el: ProductsPageType) => el.category_type === type && (el.id).toString() === id)

  
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
    <Link to={`${type}/${good.id}`}>
        <GoodCard
          id={good.id}
          label={good.label}
          price={good.price}
          img={good.img}
          category_type={good.category_type}
          discription={good.description}
        />
        </Link>
  );
};




