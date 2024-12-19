import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./components/Customers";
import AddCustomer from "./components/AddCustomer";
import UpdateCustomer from "./components/UpdateCustomer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/update-customer/:id" element={<UpdateCustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
