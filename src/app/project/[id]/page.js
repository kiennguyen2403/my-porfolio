"use client";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Work({ params }) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
        }}>
            <Typography variant="h1" component="div">
                {params.id}
            </Typography>
        </Box>
    );

}