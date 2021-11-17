import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { App } from "./App";
import { store } from "./App/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
