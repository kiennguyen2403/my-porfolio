"use client";
import { Stack, Typography, Box } from "@mui/material";
import ExperienceTree from "../timeline/timeline";

const data = [
    {
        date: 'November 2023 - Now',
        name: 'Software Engineer Internship at Moveware, Melbourne',
        description: 'Designed and maintained a comprehensive logistic system, integrating ProgressOpenEdge, ASP.NET, Azure Functions, and Angular to optimize performance and user experiences.',
    },
    {
        date: 'May 2022 — July 2024',
        name: 'Software Engineer Internship at AML Cloud, Melbourne',
        description: 'As a Frontend Developer for an anti-money laundering startup, I specialized in Flutter and Riverpod, contributing to the creation of a robust and user- friendly interface for cutting - edge financial security solutions',
    },
];

export default function EmploymentHistory() {
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
                Employment History
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