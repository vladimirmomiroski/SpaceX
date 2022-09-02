import React from "react";
import { AppBar, Box } from "@mui/material";
import NavbarLogo from "./NavbarLogo";

const navContainer = {
  position: "static",
  width: "80%",
  margin: "0 auto",
  padding: "1.8rem 0",
};

export default function Navbar() {
  return (
    <Box sx={{width: '100%', backgroundColor: 'main.secondary'}}>
      <AppBar sx={navContainer} elevation={2}>
        <NavbarLogo />
      </AppBar>
    </Box>
  );
}
