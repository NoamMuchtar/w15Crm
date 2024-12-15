import { useEffect, useState } from "react";
import { deleteCustomer, getAllCustomers } from "../services/customerService";
import { useNavigate } from "react-router-dom";

function Customers() {
  let [customers, setCustomers] = useState([]);
  let [customersChanged, setCustomersChanged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCustomers()
      .then((customers) => setCustomers(customers.data))
      .catch((err) => console.log(err));
  }, [customersChanged]);

  return (
    <>
      <h4 className="display-4">Customers</h4>

      {customers.length ? (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="col-2">{customer.id}</td>
                <td className="col-2">{customer.firstName}</td>
                <td className="col-2">{customer.lastName}</td>
                <td className="col-2">{customer.email}</td>
                <td className="col-2">{customer.phone}</td>
                <td className="col-1">
                  <i
                    className="fa-solid fa-user-pen text-warning"
                    onClick={() => {
                      navigate(`update-customer/${customer.id}`);
                    }}
                  ></i>
                </td>
                <td className="col-1">
                  <i
                    className="fa-solid fa-user-xmark text-danger"
                    onClick={() => {
                      if (window.confirm("Are you sure?")) {
                        deleteCustomer(customer.id)
                          .then(() => setCustomersChanged(!customersChanged))
                          .catch((err) => console.log(err));
                      }
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Customers found</p>
      )}
    </>
  );
}

export default Customers;
