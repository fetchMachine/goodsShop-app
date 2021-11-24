import css from "./style.module.css";
import { Link } from "react-router-dom";
import { type } from "os";

interface MenuType {
  categories: {
    id: number;
    type: string;
    label: string;
  }[];
}
export const Menu = (props: MenuType) => {
  return (
    <ul className={css.menu}>
      {props.categories.map((item) => {
        return (
          <li>
            <Link to={`/${type}`}> {item.label} </Link>
          </li>
        );
      })}
    </ul>
  );
};
