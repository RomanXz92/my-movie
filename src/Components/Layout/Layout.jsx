import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  CustomLinkHome,
  MenuItem,
  MenuList,
  NavWrapper,
} from "./layout.styled";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <NavWrapper>
        <MenuList>
          <MenuItem className={location.pathname === "/" ? "active" : ""}>
            <CustomLinkHome to="/">Home</CustomLinkHome>
          </MenuItem>
          <MenuItem className={location.pathname === "/movies" ? "active" : ""}>
            <CustomLinkHome to="/movies">Movies</CustomLinkHome>
          </MenuItem>
        </MenuList>
      </NavWrapper>
      <Outlet />
    </>
  );
}
