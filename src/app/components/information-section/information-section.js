"use client";
import { Box, Stack, Typography, Avatar, IconButton, Icon, Button } from "@mui/material";
import { useState, useEffect } from "react";
import TypeWriter from "../type-writer/type-writer";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EmailIcon from '@mui/icons-material/Email';
import { variable } from "@/app/lib/variable";

export default function InformationSection({ id }) {
    return (
        <Stack
            id={id}
            direction={{ xs: 'column', md: 'row' }}
            sx={{
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '70%',
            }}>
            <Box>
                <Avatar
                    alt="Kien Nguyen"
                    src="/images/avatar.png"
                    sx={{
                        width: 300,
                        height: 300,
                    }} />
            </Box>
            <Stack
                spacing={2}
                direction="column"
                sx={{
                    alignItems: 'start',
                    '@media (max-width: 600px)': {
                        alignItems: 'center',
                        marginTop: '1rem',
                    },
                }}
            >
                <Typography
                    variant="h4"
                    component="div"

                    sx={{
                        textAlign: 'start',
                        '@media (max-width: 600px)': {
                            marginTop: '1rem',
                            textAlign: 'center',
                        },
                    }}>
                    Nguyen Trung Kien
                </Typography>
                <TypeWriter text={["Software Engineer", "Full-Stack Developer", "Mobile Developer"]} />
                <Stack direction="row" spacing={2} >
                    <Button
                        onClick={() => {
                            const resumeUrl = window.location.href.toString().replace("/about", "") + '/documents/resume.pdf';
                            resumeUrl.replace('/about', '');
                            window.location.href = resumeUrl;
                        }}
                        variant="outlined"
                        startIcon={<SummarizeIcon />}>
                        Resume
                    </Button>

                    <IconButton onClick={() => {
                        window.open("https://github.com/kiennguyen2403");
                    }}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        window.open("https://www.linkedin.com/in/kiennguyen2403/");
                    }}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        window.open("mailto:kientdn2403@gmail.com");
                    }}>
                        <EmailIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>

    )
}