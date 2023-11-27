import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  background-color: whitesmoke;
  box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.69);
  margin-bottom: 22px;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: inline-flex;
  gap: 12px;
`;

export const MenuItem = styled.li``;

export const CustomLinkHome = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: black;
  margin: 0;
  &.active {
    color: red;
  }
`;

export const CustomLinkMovie = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: black;
  margin: 0;
  &.active {
    color: red;
  }
`;
