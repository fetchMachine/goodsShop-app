import { GoodCard } from "components/Card";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { StoreSelectors  } from "store";
import { Link, useNavigate } from "react-router-dom";

export const CategoryPage: React.FC = () => {
  const categories = useSelector(StoreSelectors.getPopularCategories);
  const { type } = useParams();
  const thisType = categories.data.find((el) => el.type === type ) ;

  let navigate = useNavigate();
  function handleClick() {
    navigate("-1");
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
      {/* {thisType.data.map((item) => (
        <Link to={`${item.category_type}/${item.id}`}>
        <GoodCard
          id={item.id}
          label={item.label}
          price={item.price}
          img={item.img}
          category_type={item.category_type}
          discription={item.discription}
        />
        </Link>

      ))} */}
    </div>
  );
};
