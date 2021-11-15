import { Row, Col } from "antd";
import { Menu } from "../Menu";
import { Route, Switch } from "react-router-dom";
import { Header } from "../Header";
export const StartPage: React.FC = () => {
  return (
    <Switch>
      <Route path="#">
        <Header />
        <Row>
          <Col xs={24} span={18} push={6} />
          <Col xs={24} span={6} pull={18}>
            <Menu />
          </Col>
        </Row>
      </Route>
    </Switch>
  );
};
