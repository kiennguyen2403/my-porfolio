"use client";
import { Box, Typography } from "@mui/material";
import NeonText from "./components/neon-text/neon-text";
import { keyframes } from '@mui/system';

const blink  = keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
        text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #0fa,
        0 0 80px #0fa,
        0 0 90px #0fa,
        0 0 100px #0fa,
        0 0 150px #0fa;
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }   
`;

export default function Blog() {
    return (
        <Box sx={{
            marginTop: '20rem',
            marginBottom: '15rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}>
            <Typography variant="h3" component="div" style={{
                color: '#fff',
                textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa',
                animation: `${blink} 1.5s infinite alternate`,
            }}>
                Coming Soon
            </Typography>
        </Box>
    )
}