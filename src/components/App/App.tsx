import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { store } from 'store';
import { StartPage } from "../StartPage";
import { CategoryPage } from "../CategoryPage"

export const App = () => {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/:type" element={<CategoryPage category={[]} items={[]}/>} />
    </Routes>
    </Provider>
  )
   
 
};