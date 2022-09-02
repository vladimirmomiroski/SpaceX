import { useState, useEffect, useContext } from "react";
import { Alert, Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Context } from "../../../context/Context";
import MissionDetailsComment from "./MissionDetailsComment";


export default function MissionDetailsCommentsPart() {
  const [commentValue, setCommentValue] = useState("");
  const [missionComments, setMissionComments] = useState([]);

  const { missions, comments, postComment } = useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    if (missions.length && comments.length) {
      const missionCommentsArr = comments.filter((el) => el.parentId === id);
      setMissionComments(missionCommentsArr);
    }
  }, [missions, comments]);

  const addComment = () => {
    if (commentValue) {
      const item = {
        comment: commentValue,
        parentId: id,
      };
      postComment(item);
      setCommentValue("");
    }
  };

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Typography sx={{margin: '2rem 0 0.5rem'}} color={"primary.secondary"} variant={"body2"}>
        Mission Comments:
      </Typography>
      {missionComments.map((item) => (
        <MissionDetailsComment key={item._id} item={item} />
      ))}
      {!missionComments.length && (
        <Alert sx={{marginBottom: '1rem'}} variant={'outlined'} severity="info">No messages about this mission</Alert>
      )}
      
        <textarea
          value={commentValue}
          placeholder='Comment about the mission..'
          rows='5'
          onChange={(e) => setCommentValue(e.target.value)}
          style={{width:'100%', resize: 'none', padding: '0.4rem', marginTop: '1rem'}}
        />
        <Button
          onClick={() => addComment()}
          variant={"contained"}
          disabled={!commentValue}
          sx={{width:'100%', marginTop: '0.5rem'}}
        >
          Add Comment
        </Button>
    </Grid>
  );
}
