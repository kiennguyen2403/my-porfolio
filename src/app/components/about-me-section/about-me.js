"use client";
import React, { useState } from "react";
import { Typography, Box, Stack, Fade } from "@mui/material";
import VizSensor from 'react-visibility-sensor';

export default function AboutMe({ id }) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <VizSensor onChange={(isVisible) => {
            setIsVisible(isVisible);
        }}>
            <Fade in={isVisible} timeout={600}>
                <Stack
                    id={id}
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
                        About Me
                    </Typography>
                    <Box sx={{
                        marginLeft: '2rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '60vw',
                    }}>
                        <Typography variant="body1" component="div" >
                            A passionate and innovative student with hands-on experience in web and mobile
                            development. Transitioning into a professional setting, I aspire to create a lasting legacy
                            by contributing unique characteristics to dynamic teams and delivering cutting-edge
                            solutions. Ready to make a lasting impact in technology.
                        </Typography>
                    </Box>
                </Stack>
            </Fade>
        </VizSensor>
    );
}