import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import MainItem from "./MainItem";

export default function Main() {
    
  const { missions } = useContext(Context);

  return <Grid container spacing={4}>
    {missions.map(el => (
        <MainItem key={el.id} item={el} />
    ))}
  </Grid>;
}
