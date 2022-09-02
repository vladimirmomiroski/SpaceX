import React from "react";
import { Box, Button } from '@mui/material';
import { useState } from "react";

export default function MissionDetailsCommentsPart() {

    const [commentValue, setCommentValue] = useState("")

    
  return (
    <Box>
        <textarea onChange={(e) => setCommentValue(e.target.value)} />
       <Button variant={'contained'} disabled={!commentValue}>Add Comment</Button>
    </Box>
  )
}
