import 'antd/dist/antd.css'
import { Routes, Route } from "react-router-dom";
import { StartPage } from "../StartPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
    </Routes>
  )
   
 
};