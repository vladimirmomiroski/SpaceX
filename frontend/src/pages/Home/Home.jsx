import React from "react";
import Main from "./Main/Main";
import { Box } from '@mui/material';

const mainContainer = {
     width: '80%',
     margin: '0 auto',
     padding: '3rem 0'
}

export default function Home() {
  return (
    <Box sx={mainContainer}>
      <Main/>
    </Box>
  );
}
