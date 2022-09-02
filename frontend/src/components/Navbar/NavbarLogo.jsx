import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const logoContainer = {
  display: "flex",
  alignItems: "center",
  ":hover": {
    cursor: "pointer",
  },
};

const logoImage = {
  width:'2.5rem',
  height: '2.5rem',
  transform: 'rotate(-25deg)'
}

export default function NavbarLogo() {
  const location = useNavigate();

  return (
    <Box sx={logoContainer} onClick={() => location("/")}>
      <Typography color={"secondary.secondary"} variant="h4">
        SpaceX
      </Typography>
      <img style={logoImage} src="images/rocket.png" alt="rocket logo" />
    </Box>
  );
}
