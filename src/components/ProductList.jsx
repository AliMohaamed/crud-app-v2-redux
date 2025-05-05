import { Eye, SquarePen, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading, Error } from "../components";
import { deleteProduct, getAllProducts } from "../API/productAPI";
import "./ProductList.css";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => setErrors(error))
      .finally(() => setIsLoading(false));
  }, []);

  const deleteHandler = (productId) => {
    deleteProduct(productId)
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
        setDeleteConfirmId(null);
      })
      .catch((err) => {
        console.log("err", err);
        setDeleteConfirmId(null);
      });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="container mt-5">
        <Loading />
      </div>
    );
  }

  if (errors) {
    return (
      <div className="container mt-5">
        <Error message={errors} />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="container mt-5">
        <div className="alert alert-info text-center">
          <h4>No products found</h4>
          <p>Add your first product to get started!</p>
          <Link to="/products/0/edit" className="btn btn-primary mt-2">
            Add New Product
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm hover-shadow">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title text-primary mb-0">{product.name}</h5>
                  <span className="badge bg-secondary">ID: {product.id}</span>
                </div>
                <p className="card-text h4 text-success mb-4">
                  {formatPrice(product.price)}
                </p>
                <div className="d-flex justify-content-end gap-2">
                  <Link
                    to={`${product.id}`}
                    className="btn btn-outline-primary btn-sm"
                    title="View Details"
                  >
                    <Eye size={16} />
                  </Link>
                  <Link
                    to={`${product.id}/edit`}
                    className="btn btn-outline-info btn-sm"
                    title="Edit Product"
                  >
                    <SquarePen size={16} />
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    title="Delete Product"
                    onClick={() => setDeleteConfirmId(product.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirmId === product.id && (
              <div className="modal fade show" style={{ display: "block" }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Confirm Delete</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setDeleteConfirmId(null)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>Are you sure you want to delete this product?</p>
                      <p className="text-danger">
                        This action cannot be undone.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setDeleteConfirmId(null)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteHandler(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
