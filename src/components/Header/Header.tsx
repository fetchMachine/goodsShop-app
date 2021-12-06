import { PageHeader, Divider, Input, Badge } from "antd";
import css from "./style.module.css"
import { Link } from "react-router-dom";
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
      '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
  });
const { Search } = Input;
export const Header = () => {
  return (
    <>
      <div className={css.header}>
        <Link to="/">
          <PageHeader  style={{ display: "flex", justifyContent: "space-between"}} title="Good shop" > 
          <Search   placeholder="Введите название товара" style={{ width: 500}} />
          <Badge count={1}>
           
            <IconFont style={{ fontSize: 24, textAlign: "center"}}  type="icon-shoppingcart" />
           
          </Badge>
         
          </PageHeader>
          <Divider />
        </Link>
      </div>
    </>
  );
};
