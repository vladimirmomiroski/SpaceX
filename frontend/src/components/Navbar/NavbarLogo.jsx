import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const logoContainer = {
  display: "flex",
  alignItems: "center",
  ':hover': {
    cursor: 'pointer',
  }
};


export default function NavbarLogo() {
  return (
    <Box sx={logoContainer}>
  
      <Typography color={'primary.main'} variant="h4">SpaceX</Typography>
    </Box>
  );
}
