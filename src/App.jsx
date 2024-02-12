import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Category from "./components/Category";
import Nav from "./components/Nav";
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/category/:categoryId" element={<Category/>} />
        
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
