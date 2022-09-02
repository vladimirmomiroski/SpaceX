import { Box, Grid } from "@mui/material";
import React from "react";
import MissionDetailsCommentsPart from "./MissionDetailsCommentsPart/MissionDetailsCommentsPart";
import MissionDetailsItem from "./MissionDetailsItem/MissionDetailsItem";

const mainWrapper = {
  backgroundColor: 'secondary.secondary',
    width:'100%'
}

const missionDetailsBox = {
  width: "85%",
  margin: "0 auto",
  padding: "3rem 0",
  minHeight: "calc(100vh - 183.6px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default function MissionDetails() {
  return (
    <Box sx={mainWrapper}>
      <Grid container sx={missionDetailsBox}>
        <MissionDetailsItem />
        <MissionDetailsCommentsPart />
      </Grid>
    </Box>
  );
}
