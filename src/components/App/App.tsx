import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { store } from 'store';
import { StartPage } from "../StartPage";
import { CategoryPage } from "../CategoryPage"
import { ProductPage} from "../ProductPage"


export const App = () => {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/:type/:id" element={<ProductPage id={0} category_type={''} label={''} price={0} img={''}/>} />
      <Route path="/:type" element={<CategoryPage />} />
    </Routes>
    </Provider>
  )
   
 
};