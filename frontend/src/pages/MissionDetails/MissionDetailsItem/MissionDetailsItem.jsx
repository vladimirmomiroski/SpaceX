import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context/Context";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Paper, Typography } from "@mui/material";
import MissionDetailsItemIcons from "./MissionDetailsItemIcons";

const itemBox = {
  padding: '1rem', 
  textAlign: 'center',
  width: '100%'
}

export default function MissionDetailsItem() {
  const [cardDetails, setCardDetails] = useState({});

  const { missions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(missions.length) {
      const card = missions.find((mission) => mission.id === id);
      card ? setCardDetails(card) : navigate("/notFound");
    }
  }, [missions]);


  const { name, links, details } = cardDetails;

  const detailsMessage = details ? details : "No information available about this mission"
  

  return (
    <Grid item xs={12} sm={12} md={7} sx={itemBox}>
      <Paper elevation={5} sx={{padding: '1rem', backgroundColor: 'primary.main'}}>
      <Typography color={'secondary.secondary'} sx={{margin: '1rem 0 1.5rem'}} variant={'h4'}>{name}</Typography>
       <img style={{marginBottom: '1.5rem'}} src={links?.patch.small} alt="rocket" /> 
       <Typography color={'secondary.secondary'} variant={'body2'}>{detailsMessage}</Typography>
       <MissionDetailsItemIcons links={links}/>
       </Paper>
    </Grid>
  );
}
