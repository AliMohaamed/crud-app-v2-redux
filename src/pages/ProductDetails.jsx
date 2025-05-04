import React from "react";
import { Link, useParams } from "react-router-dom";
import { SharedCard } from "../shared/SharedCard";
import { useFetch } from "../custom-hooks/useFetch";
import { getProductById } from "../API/productAPI";
import { Error, Loading } from "../components";

export function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading, errors } = useFetch(getProductById, id);
  console.log();
  return (
    <>
      {isLoading && <Loading />}
      {errors && <Error message={errors}/>}
      {!errors && !isLoading && (
        <SharedCard
          className={"container bg-dark text-light"}
          title={`Product Details ${id}`}
          textColor={"text-warning"}
        >
          <p className="lead fs-4 mt-3">
            Product Name: <strong>{product.name}</strong>
          </p>
          <p className="lead fs-4 mt-3">
            Product Price: <strong>{product.price}</strong>
          </p>
          <Link to="/products" className="btn btn-info mt-5">
            Back To Products
          </Link>
        </SharedCard>
      )}
    </>
  );
}
