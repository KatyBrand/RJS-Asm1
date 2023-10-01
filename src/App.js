//import Component
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

//useState để truyền Date user nhập ở Homepage qua Search page
//Home - hàm lift up state
//Search - truyền props
function App() {
  const [openDate, setOpenDate] = useState("");

  const addDateHandler = (date) => {
    setOpenDate(date);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onAddDate={addDateHandler} />} />
        <Route path="/search" element={<Search openDate={openDate} />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
