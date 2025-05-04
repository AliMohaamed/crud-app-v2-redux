import React from "react";
import { SharedCard } from "../shared/SharedCard";
import { ProductsHeader, ProductList } from "../components/index";

export function Products() {
  return (
    <>
      <SharedCard
        title="Our Products"
        textColor="text-muted text-center"
        header={<ProductsHeader />}
      >
        <ProductList />
      </SharedCard>
    </>
  );
}
