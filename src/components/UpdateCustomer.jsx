import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerById, updateCustomer } from "../services/customerService";
import { useFormik } from "formik";
import * as yup from "yup";

function UpdateCustomer() {
  const navigate = useNavigate();
  let { id } = useParams();
  let [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    getCustomerById(id)
      .then((customer) => {
        setCustomer(customer.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      firstName: yup.string().required().min(2),
      lastName: yup.string().required().min(2),
      email: yup.string().required().email(),
      phone: yup
        .string()
        .required()
        .matches(/^05[0-9]{1}-?[0-9]{7}$/),
    }),
    onSubmit: (values) => {
      updateCustomer(id, values)
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <>
      <h4 className="display-4">Update Customer</h4>
      <div className="container d-flex justify-content-center">
        <form onSubmit={formik.handleSubmit}>
          {/* first name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">First Name</label>
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-danger">{formik.errors.firstName}</p>
            )}
          </div>

          {/* last Name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Last Name</label>
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-danger">{formik.errors.lastName}</p>
            )}
          </div>
          {/* email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Email</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          {/* phone */}
          <div className="form-floating mb-3">
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Phone</label>
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-danger">{formik.errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-success"
            disabled={!formik.dirty || !formik.isValid}
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateCustomer;
