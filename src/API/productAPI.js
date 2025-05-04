import axios from "axios";
import { API_URL } from "../config";

const baseUrl = `${API_URL}/products`;

const getAllProducts = () => axios.get(baseUrl);

const getProductById = (productId) => axios.get(`${baseUrl}/${productId}`);

const addNewProduct = (product) => axios.post(baseUrl, product);

const editProduct = (productId, product) =>
  axios.put(`${baseUrl}/${productId}`, product);

const deleteProduct = (productId) => axios.delete(`${baseUrl}/${productId}`);

export {
  getAllProducts,
  getProductById,
  addNewProduct,
  editProduct,
  deleteProduct,
};
