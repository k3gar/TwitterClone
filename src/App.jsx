import { render } from "@testing-library/react";
import React from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import LoginPage from "./components/LoginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="HomePage" element={<HomePage />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
