import styled from "styled-components";

export const Nav = styled.nav`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  transition: all 0.3s ease;

  &.scrolled {
    padding: 10px 0;
    background-color: white !important;
  }
`;

export const NavbarBrand = styled.a`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color) !important;
  letter-spacing: 1px;
`;

export const NavbarNav = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const NavAnchor = styled.a`
  color: var(--dark-color);
  font-weight: 500;
  padding: 0.5rem 1rem;
  position: relative;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover,
  &.active {
    color: var(--primary-color) !important;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background-color: var(--primary-color);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

export const NavbarToggler = styled.button`
  border: none;
  padding: 0.25rem 0.5rem;
  background: transparent;

  &:focus {
    box-shadow: none;
  }
`;

export const ModeToggle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
