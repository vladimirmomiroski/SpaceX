import { Box, Typography } from '@mui/material'
import React from 'react'

const smallText = {
    fontSize: "0.7rem",
    fontWeight: 300,
  };

export default function MainItemInfoDate({launchDate}) {
  return (
    <Box>
        <Typography color={"primary.secondary"} sx={smallText}>
        Launch Date:
      </Typography>
      <Typography color={"primary.main"} variant={"p"}>
        {launchDate}
      </Typography>
    </Box>
  )
}
