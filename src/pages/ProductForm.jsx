import React, { useEffect, useState } from "react";
import { SharedCard } from "../shared/SharedCard";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../styledComponent/Button";
import { getProductById } from "../API/productAPI";
import { useDispatch } from "react-redux";
import { addProductAction, editProductAction } from "../store/productSlice";

export function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
  });
  useEffect(() => {
    getProductById(id).then((response) => {
      setFormValues(response.data);
    });
  }, [id]);

  const getInputValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (id == 0) {
      dispatch(addProductAction(formValues));
      navigate("/products");
    } else {
      dispatch(editProductAction({ id, formValues }));
      navigate("/products");
    }
  };

  return (
    <>
      <SharedCard
        title={`${id == 0 ? "Add New Product" : "Edit Product"} `}
        textColor={"text-muted text-center"}
      >
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={getInputValue}
                name="name"
                value={formValues.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                onChange={getInputValue}
                name="price"
                value={formValues.price}
              />
            </div>
            <Button type="submit">
              {id == 0 ? "Add New Product" : "Edit Product"}
            </Button>
          </form>
        </div>
      </SharedCard>
    </>
  );
}
