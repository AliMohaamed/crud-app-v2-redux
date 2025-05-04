import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, ProductDetails, ProductForm, Products } from "../pages";
import { SharedLayout } from "./SharedLayout";

export function Mainlayout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="products/:id/edit" element={<ProductForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
