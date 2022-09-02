import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react';

export default function MissionDetailsComment({item}) {

  const { comment } = item;

  return (
    <Paper sx={{marginBottom: '0.4rem'}}>
    <List sx={{ width: '100%' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Comment:"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="h7"
              color="text.primary"
            >
               {comment}
            </Typography>
           
          </React.Fragment>
        }
      />
    </ListItem>
    </List>
    </Paper>
  )
}
