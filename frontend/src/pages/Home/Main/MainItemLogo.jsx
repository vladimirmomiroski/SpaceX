import { Box, Typography } from '@mui/material';
import React from 'react';

const title = {
    padding: '0.5rem 0' 
}

const image = {
   width: '5rem',
   height: '5rem'
}

export default function MainItemLogo({name, links}) {

    const { patch: { small } } = links

  return (
    <Box sx={{textAlign: 'center'}}>
        <Typography sx={title} color={'primary.main'} variant={'h5'}>{name}</Typography>
        <img style={image} src={small} alt="rocket" />
    </Box>
  )
}
