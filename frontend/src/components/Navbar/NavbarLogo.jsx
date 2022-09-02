import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const logoContainer = {
  display: "flex",
  alignItems: "center",
  marginLeft: "1.5rem",
  ":hover": {
    cursor: "pointer",
  },
};

export default function NavbarLogo() {
  const location = useNavigate();

  return (
    <Box sx={logoContainer} onClick={() => location("/")}>
      <Typography color={"secondary.secondary"} variant="h4">
        SpaceX
      </Typography>
    </Box>
  );
}
