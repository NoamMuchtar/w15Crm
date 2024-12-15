import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./components/Customers";
import AddCustomer from "./components/AddCustomer";
import UpdateCustomer from "./components/UpdateCustomer";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/update-customer" element={<UpdateCustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
