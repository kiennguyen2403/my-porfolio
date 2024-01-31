"use client";

import { Stack, Typography, Box } from "@mui/material";
import ExperienceTree from "../timeline/timeline";

const data = [
    {
        date: 'August 2021 - Now',
        name: 'Swinburne University of Technology',
        description: 'Bachelor of Science in Computer Science',
    },
    {
        date: 'August 2018 -  June 2021',
        name: 'Tran Dai Nghia High School for the Gifted',
        description: 'C++ programming, Problem-solving skills',
    },
];

export default function Education() {
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
                Education
            </Typography>
            <Box sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '80vw',
            }}>
                <ExperienceTree data={data}/>
            </Box>
        </Stack>
    );
}