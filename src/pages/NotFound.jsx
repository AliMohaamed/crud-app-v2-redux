import React from "react";

export function NotFound() {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="alert alert-danger mt-5 container text-center">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </div>
    </>
  );
}
