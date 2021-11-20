import "antd/dist/antd.css";
import React from "react";
import { Card, Col, Row } from "antd";

export interface CardType {
  id: number;
  category_type: string;
  label: string;
  price: number;
  img: string;
}

export const GoodCard: React.FC<CardType> = ({ id, label, price, img }) => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title={label} bordered={false}>
            {img}
            {price}
          </Card>
        </Col>
        <Col span={8}>
          <Card title={label} bordered={false}>
          {img}
            {price}
          </Card>
        </Col>
        <Col span={8}>
          <Card title={label} bordered={false}>
          {img}
            {price}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
