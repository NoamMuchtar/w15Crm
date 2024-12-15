import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink className="me-4" to="/">
        Home
      </NavLink>
      <NavLink className="me-4" to="/add-customer">
        Add Customer
      </NavLink>
      <NavLink to="/update-customer">Update Customer</NavLink>
    </>
  );
}

export default Navbar;
