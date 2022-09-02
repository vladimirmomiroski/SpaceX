import { Grid, Paper } from "@mui/material";
import React from "react";
import MainItemLogo from "./MainItemLogo";
import { useNavigate } from 'react-router-dom';
import MainItemInfo from "./MainItemInfo";

const card = {
    padding: '0.5rem',
    ':hover': {
        cursor: 'pointer'
    }
}

export default function MainItem({item}) {

  const { id, name, links, date_local, success } = item;
  const location = useNavigate()

  return (
    <Grid  xs={12} sm={6} md={4} item>
      <Paper sx={card} elevation={3} onClick={() => location("/missionDetails/" + id)}>
        <MainItemLogo name={name} links={links}/>
        <MainItemInfo date={date_local} success={success} />
      </Paper>
    </Grid>
  );
}
