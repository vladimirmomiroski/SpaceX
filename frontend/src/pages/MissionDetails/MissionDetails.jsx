import { Context } from "../../context/Context";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MissionDetails() {
  const [cardDetails, setCardDetails] = useState({});

  const { missions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    const card = missions.find((mission) => mission.id === id);
    setCardDetails(card);
  }, []);

  
  return (
    <div>
      <div>{cardDetails.name}</div>
    </div>
  );
}
