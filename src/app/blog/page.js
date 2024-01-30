
import { Box, Typography } from "@mui/material";
import NeonText from "./components/neon-text/neon-text";
import { keyframes } from '@mui/system';

export default function Blog() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}>
            <Typography variant="h3" component="div" style={{
                color: '#fff',
                textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa',
            }}>
                Coming Soon
            </Typography>
        </Box>
    )
}