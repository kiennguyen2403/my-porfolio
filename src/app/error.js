'use client' // Error components must be Client Components

import { Button, Typography, Box } from '@mui/material'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        
        }}>
            <Typography variant="h4" component="div">
                Something went wrong
            </Typography>
            <Button
                sx={{
                    marginTop: '1rem',
                }}
                variant='outlined'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }>
                Try again
            </Button>
        </Box>
    )
}