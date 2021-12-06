import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useEffect } from "react";
import { MenuCategoriesActions, MenuCategoriesSelectors } from "store/сategoriesSlice";
import { useSelector } from "react-redux";

interface MenuType {
  id: number,
  type: string,
  label: string
}

export const MenuSide = (props: MenuType) => {
  const categories = useSelector(MenuCategoriesSelectors.getCategories);

  useEffect(() => {
    dispatch(MenuCategoriesActions.getMenuCategories())
  }, [])
  return (
    <div>
      <Menu mode="vertical">
        {categories.map((item: MenuType) => (
          <Menu.Item key={item.id}>
            <Link to={`/${item.type}`}> {item.label} </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

