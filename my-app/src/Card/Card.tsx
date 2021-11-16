import { Card } from "antd";
import css from "./style.module.css";

export interface CardType {
  id: number;
  category_type: string;
  label: string;
  price: number;
  img: string;
}
export const GoodCard = (props: CardType) => {
  return (
    <Card className={css.card} title={props.label}>
      {props.img}
      {props.price + "руб"}
    </Card>
  );
};
