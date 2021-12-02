import { Link } from "react-router-dom";
import { Menu } from "antd";

interface MenuType {
  categories: {
    id: number;
    type: string;
    label: string;
  }[];
}

export const MenuSide = (props: MenuType) => {
  return (
    <div>
      <Menu mode="vertical">
        {props.categories.map((item) => (
          <Menu.Item key={item.id}>
            <Link to={`/${item.type}`}> {item.label} </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
