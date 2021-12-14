import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreSelectors } from "store";
import { fetchCategories } from "store/сategoriesSlice/actionCreator";

interface MenuType {
  id: number;
  type: string;
  label: string;
}

export const MenuSide = () => {
  const categories = useSelector(StoreSelectors.getCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  return (
    <div>
      <Menu mode="vertical">
        {categories.data.map((item: MenuType) => (
          <Menu.Item key={item.id}>
            <Link to={`/${item.type}`}> {item.label} </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
