import { Box, Typography } from "@mui/material";
import React from "react";
import DateFn from "./DateFn";
import MainItemInfoDate from "./MainItemInfoDate";

const infoBox = {
  padding: '1rem 0.7rem',
  marginTop: '1.2rem',
  backgroundColor: 'secondary.secondary',
  display:'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}


export default function MainItemInfo({ success, date }) {
  const localeDate = new Date(date).toLocaleDateString();
  const formattedDate = DateFn(localeDate);
  
  const successfullMessage = success ? "Successfull Mission" : "Mission Failed";

  return (
    <Box sx={infoBox}>
      <Typography color={'primary.main'}>{successfullMessage}</Typography>
      <MainItemInfoDate launchDate={formattedDate}/>
    </Box>
  );
}
