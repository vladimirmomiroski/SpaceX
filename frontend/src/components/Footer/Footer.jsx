import { Typography, Box } from "@mui/material";
import React from "react";

const footerBox = {
  backgroundColor: "primary.secondary",
  padding: "2rem 0",
};

const innerBox = {
    width: '85%',
    margin: '0 auto',
    display:'flex',
    justifyContent: 'space-between'
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box sx={footerBox}>
      <Box sx={innerBox}>
        <Typography variant={'body2'} color={"secondary.secondary"}>Developed using MERN stack</Typography>
        <Typography variant={'body2'} color={"secondary.secondary"}>&copy; VM {year} </Typography>
      </Box>
    </Box>
  );
}
