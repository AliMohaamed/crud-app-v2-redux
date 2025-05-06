import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Error, Loading } from "../components";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";

export function ProductDetails() {
  const { id } = useParams();
  const { products, isLoading, errors } = useSelector(
    (store) => store.productSlice
  );
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(products.find((item) => item.id == id));
  }, [id]);

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

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Product Details</h3>
                <Link to="/products" className="btn btn-outline-light btn-sm">
                  <ArrowLeft size={16} className="me-1" />
                  Back to Products
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <h5 className="text-muted mb-2">Product ID</h5>
                    <p className="h4">{product.id}</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-muted mb-2">Product Name</h5>
                    <p className="h4 text-primary">{product.name}</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-muted mb-2">Price</h5>
                    <p className="h4 text-success">${product.price}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-center">
                      <div className="mb-3">
                        <span className="badge bg-info p-2">
                          Product Details
                        </span>
                      </div>
                      <p className="text-muted">
                        View and manage your product information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to={`/products/${id}/edit`}
                  className="btn btn-primary me-2"
                >
                  Edit Product
                </Link>
                <Link to="/products" className="btn btn-outline-secondary">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
