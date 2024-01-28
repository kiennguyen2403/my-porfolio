"use client";
import { Box, Stack, Typography, Avatar, IconButton, Icon, Button } from "@mui/material";
import { useState, useEffect } from "react";
import TypeWriter from "../type-writer/type-writer";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EmailIcon from '@mui/icons-material/Email';


export default function InformationSection() {
    return (
        <Box sx={{
            display: 'flex',
            direction: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
        }}>
            <Stack spacing={2} direction="column" sx={{
                alignItems: 'start',

            }}>
                <Typography variant="h4" component="div">
                    Nguyen Trung Kien
                </Typography>
                <TypeWriter text={["Software Engineer", "Full-Stack Developer", "Mobile Developer"]} />
                <Stack direction="row" spacing={2} >
                    <Button variant="outlined" startIcon={<SummarizeIcon />}>
                        Resume
                    </Button>

                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <Box>
                <Avatar
                    alt="Kien Nguyen"
                    src="/images/avatar.jpg"
                    sx={{
                        width: 150,
                        height: 150,
                    }} />
            </Box>
        </Box>

    )
}