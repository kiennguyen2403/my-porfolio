"use client";
import React, { useState, useEffect } from "react";
import { Stack, Typography, Box, List, ListItemButton, ListItemText } from "@mui/material";

const data = [
    {
        date: 'Dec 2023',
        name: 'First Prize Win in Undergraduate Industry Program',
        issue: 'IMove',
        description: 'Developing a cutting-edge system to find and visualize real-time parking data around Melbourne, enhancing accessibility and convenience',
    },
    {
        date: ' April 2021',
        name: 'Third Prize in the City Contest of Science and Technology',
        issue: 'Department of Education and Training of Ho Chi Minh City',
        description: ' Creating a navigation app to find the most optimized path, solving the traffic jams in the city.',
    },
];
export default function Achievement() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) {
        return null;
    }
    return (
        <Stack
            spacing='1rem'
            sx={{
                width: '100vw',
                display: 'flex',
                direction: 'row',
                alignItems: 'center',
                margin: "auto"
            }}>
            <Typography
                variant="h4"
                component="div"
                sx={{
                    width: '100vw',
                    textAlign: 'center',
                }}>
                HONORS & AWARDS
            </Typography>
            <Box sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '80vw',
            }}>
                <List component="nav" aria-label="secondary mailbox folder">
                    {data.map((item, index) => (
                        <ListItemButton key={index}>
                            <ListItemText primary={item.name} secondary={
                                <Stack>
                                    <Typography variant="subtitle2">
                                        {item.date}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Issued by {item.issue}
                                    </Typography>
                                    <Typography variant="subtitle1" color="HighlightText" fontSize={14}>
                                        {item.description}
                                    </Typography>
                                </Stack>
                            } />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Stack>
    );
}