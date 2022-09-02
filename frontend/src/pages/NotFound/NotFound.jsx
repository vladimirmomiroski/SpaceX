import { Button, Container, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const container = {
    minHeight: 'calc(100vh - 183.6px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'secondary.secondary'
}

export default function NotFound() {

    const navigate = useNavigate()

  return (
    <Container maxWidth={'100%'} sx={container}>
        <Box>
            <Typography variant={'h2'}>Page Not Found!</Typography>
            <Button onClick={() => navigate('/')} sx={{marginTop: '1rem'}} variant={'contained'}>Go back</Button>
        </Box>
    </Container>
  )
}
