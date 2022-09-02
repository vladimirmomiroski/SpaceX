import React from "react";
import Main from "./Main/Main";
import { Box } from '@mui/material';

const mainContainer = {
     width: '85%',
     margin: '0 auto',
     padding: '4rem 0',
     minHeight: 'calc(100vh - 183.6px)'
}

export default function Home() {
  return (
    <Box sx={mainContainer}>
      <Main/>
    </Box>
  );
}
