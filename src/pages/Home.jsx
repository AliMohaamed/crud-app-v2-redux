import React from "react";
import { SharedCard } from "../shared/SharedCard";
import { Button } from "../styledComponent/Button";

export function Home() {
  return (
    <>
      <SharedCard
        className={"container-fluid text-center"}
        title={"Welcome to Our Website"}
        textColor={"fs-2"}
        paragraph={"Scroll down to see the navbar in action!"}
      >
        <Button>Go To Shop</Button>
      </SharedCard>
    </>
  );
}
