import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {

  const [missions, setMissions] = useState([]);

  useEffect(() => {
     fetch("https://api.spacexdata.com/v5/launches")
     .then(res => res.json())
     .then(data => {
        const missionsData = data.slice(0, 50)
        setMissions(missionsData)
     })
  }, [])

  const Obj = {
    missions
  };

  return <Context.Provider value={Obj}>{children}</Context.Provider>;
};
