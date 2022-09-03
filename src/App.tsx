import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
