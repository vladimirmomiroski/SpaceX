import React from "react";
import { AppBar } from "@mui/material";
import NavbarLogo from "./NavbarLogo";

const navContainer = {
  position: "static",
  backgroundColor: 'secondary.secondary',
  width:'80%',
  margin: '0 auto',
  padding: "1rem 2rem",
};

export default function Navbar() {
  return (
    <AppBar sx={navContainer} elevation={1}>
      <NavbarLogo />
    </AppBar>
  );
}
