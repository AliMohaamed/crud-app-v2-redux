import React from "react";
import { Button } from "../styledComponent/Button";
import {
  Nav,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
} from "../styledComponent/Navbar.styled";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export function Navbar() {
  const { count } = useSelector((store) => store.myCounterSlice);
  return (
    <>
      <div>
        {/* Navbar */}
        <Nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
          <div className="container">
            {/* Logo */}
            <NavbarBrand className="navbar-brand" href="#">
              Product Management
            </NavbarBrand>
            {/* Mobile Menu Toggle */}
            <NavbarToggler
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </NavbarToggler>
            {/* Navbar Content */}
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* Main Links */}
              <NavbarNav className="navbar-nav mx-auto">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="contact"
                  >
                    Account
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">Cart({count})</NavLink>
                </li>
              </NavbarNav>
              {/* Right Side Items */}
              <div className="d-flex align-items-center">
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </Nav>
      </div>
    </>
  );
}
