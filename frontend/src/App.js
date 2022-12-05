import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* User Views */
import Home from "./views/suite_user/home/Home";
/* Shared Views */
import Login from "./views/suite_user/login/Login";
import NotFound from "./views/error/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Routes User */}
          <Route exact path="/" element={<Home/>} />
          {/* Routes Admin */}
          <Route exact path="/login" element={<Login/>} />
          {/* Routes Page Not Found */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
