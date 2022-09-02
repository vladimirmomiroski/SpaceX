import React from "react";
import { AppBar, Avatar, Box } from "@mui/material";
import NavbarLogo from "./NavbarLogo";

const navContainer = {
  position: "static",
  width: "100%",
  padding: "1.8rem 0",
  backgroundColor: "primary.secondary"
};

const navWrapper = {
  width: '85%', 
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export default function Navbar() {
  return (
      <AppBar sx={navContainer} elevation={2}>
        <Box sx={navWrapper}>
        <NavbarLogo />
        <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg"/>
        </Box>
      </AppBar>
  );
}
