"use client";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router'

export default function Work() {
    const router = useRouter()
    const [work, setWork] = useState(undefined);
    const id = router.query.id;
            
    if (work) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}>
                <Typography variant="h1" component="div">
                    This project is existed
                </Typography>
            </Box>
        );

    } else {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}>
                <Typography variant="h1" component="div">
                    This project is not existed
                </Typography>
            </Box>
        );
    }
}