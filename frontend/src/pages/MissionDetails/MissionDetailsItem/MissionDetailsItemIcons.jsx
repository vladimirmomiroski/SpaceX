import { Box, Typography, Link } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW, faYoutube } from "@fortawesome/free-brands-svg-icons";

const iconsBox = {
  padding: "1.5rem 0 1rem",
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid',
  borderColor: 'secondary.secondary',
  marginTop: '1.5rem'
};

const iconStyle = {
  fontSize: "1.6rem",
  marginLeft: '0.4rem',
   backgroundColor: '#E7F6F2',
   borderRadius: '0.2rem',
 padding: '0.2rem'
};

export default function MissionDetailsItemIcons({ links }) {
  
  return (
    <Box sx={iconsBox}>
      <Typography color={"secondary.secondary"} variant={"body2"}>
        Learn more:
      </Typography>
      <Box sx={{marginLeft: '0.5rem',}}>
        <Link target="_blank" color={"primary.main"} href={links?.webcast}>
          <FontAwesomeIcon style={iconStyle} icon={faYoutube} />
        </Link>

        <Link target="_blank" color={'primary.main'} href={links?.wikipedia}>
          <FontAwesomeIcon style={iconStyle} icon={faWikipediaW} />
        </Link>
      </Box>
    </Box>
  );
}
