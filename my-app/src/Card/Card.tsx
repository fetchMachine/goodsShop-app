import { Card } from "antd";
import "antd/dist/antd.css";
import React from "react";

export interface CardType {
  id: number;
  category_type: string;
  label: string;
  price: number;
  img: string;
}
const { Meta } = Card;
export const GoodCard = (props: CardType) => {
  return (
    <Card
     
      hoverable
      style={{ width: 240 }}
      cover={props.img}
    >
      <Meta title={props.label} description={props.price + "руб"} />
    </Card>
  );
};
