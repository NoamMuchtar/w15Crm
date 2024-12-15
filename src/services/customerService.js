import axios from "axios";

const api = `${import.meta.env.VITE_API}/customers`;

// CRUD - Create - Read - Update - Delete
// Get all customers from db
export function getAllCustomers() {
  return axios.get(api);
}
// Get a specific customers from db
export function getCustomerById(cusId) {
  return axios.get(`${api}/${cusId}`);
}
// add new customer to db
export function addCustomer(newCustomer) {
  return axios.post(api, newCustomer);
}
// update a specific customr from db
export function updateCustomer(cusId, updatedCustomer) {
  return axios.put(`${api}/${cusId}`, updatedCustomer);
}

// delete a specific custome from db
export function deleteCustomer(cusId) {
  return axios.delete(`${api}/${cusId}`);
}

// check if customer exsist
export function customerExsistCheck(cusEmail) {
  return axios.get(`${api}?email=${cusEmail}`);
}
