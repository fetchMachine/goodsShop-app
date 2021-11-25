import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "store";
import { StartPage } from "../StartPage";
import { CategoryPage } from "../CategoryPage";
import { ProductPage } from "../ProductPage";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

export const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/:type/:id"
          element={
            <ProductPage/>
          }
        />
        <Route path="/:type" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Provider>
  );
};
