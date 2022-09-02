import { Box } from "@mui/material";
import React from "react";
import MissionDetailsCommentsPart from "./MissionDetailsCommentsPart/MissionDetailsCommentsPart";
import MissionDetailsItem from "./MissionDetailsItem/MissionDetailsItem";

const missionDetailsBox = {
  width: '80%',
  margin: '0 auto',
  padding: '4rem 0',
  display: 'flex',
  justifyContent: 'space-between'
}

export default function MissionDetails() {
  
  return (
    <Box sx={missionDetailsBox}>
      <MissionDetailsItem/>
      <MissionDetailsCommentsPart/>
    </Box>
  );
}
