import React, { createContext, useState, useEffect } from "react";
import { fetchData, fetchPost } from "../fetchMethodHandlers/fetchMethodHandlers";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [missions, setMissions] = useState([]);
  const [comments, setComments] = useState([]);

  const rocketsApi = process.env.REACT_APP_ROCKETS
  const commentsApi = process.env.REACT_APP_COMMENTS

  useEffect(() => {
    fetchData(rocketsApi, setMissions);
    fetchData(commentsApi, setComments);
  }, []);

  const postComment = (item) => {
    console.log(item)
    fetchPost(commentsApi, item, setComments)
  }

  const Obj = {
    missions,
    comments,
    postComment
  };

  return <Context.Provider value={Obj}>{children}</Context.Provider>;
};
