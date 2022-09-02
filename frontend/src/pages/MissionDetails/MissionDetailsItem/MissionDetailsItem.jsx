import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context/Context";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const itemBox = {
  padding: '1rem', 
  textAlign: 'center'
}

export default function MissionDetailsItem() {
  const [cardDetails, setCardDetails] = useState({});

  const { missions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const card = missions.find((mission) => mission.id === id);
    card ? setCardDetails(card) : navigate("/");
  }, [cardDetails]);

 
  console.log(cardDetails)
  const { name, links, details } = cardDetails;
  

  return (
    <Box sx={itemBox}>
      <Typography sx={{margin: '1rem 0 1.5rem'}} variant={'h4'}>{name}</Typography>
       <img style={{marginBottom: '1.5rem'}} src={links?.patch.small} alt="rocket" /> 
       <Typography color={'primary.secondary'} variant={'h6'}>{details}</Typography>
    </Box>
  );
}
