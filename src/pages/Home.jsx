import React from "react";
import { SharedCard } from "../shared/SharedCard";
import { Button } from "../styledComponent/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counterSlice";

export function Home() {
  const { count } = useSelector((store) => store.myCounterSlice);
  const { increase, decrease } = counterAction;
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(increase(3));
  };

  const decreaseHandler = () => {
    dispatch(decrease());
  };

  return (
    <>
      <SharedCard
        className={"container-fluid text-center"}
        title={"Welcome to Our Website"}
        textColor={"fs-2"}
        paragraph={"Scroll down to see the navbar in action!"}
      >
        <div className="alert alert-light d-flex justify-content-center gap-3 ">
          <button className="btn btn-dark" onClick={decreaseHandler}>
            -
          </button>
          <p className="lead">
            Counter <span className="text-danger">{count}</span>
          </p>
          <button className="btn btn-dark" onClick={increaseHandler}>
            +
          </button>
        </div>
        <Button>Go To Shop</Button>
      </SharedCard>
    </>
  );
}
