"use client";
import { useState } from "react";
import { Fade, Grid, Stack, Typography } from "@mui/material";
import TechnologyCard from "../technology-card/technology-card";
import VizSensor from 'react-visibility-sensor';

const technologies =
{
    frontend: [
        {
            technologies: 'React',
            imageUrl: '/images/react.png'
        },
        {
            technologies: 'Angular',
            imageUrl: '/images/angular.png'
        },
        {
            technologies: 'Flutter',
            imageUrl: '/images/flutter.png'
        },
    ],
    mobile: [
        {
            technologies: 'React Native',
            imageUrl: '/images/react-native.png'
        },
        {
            technologies: 'Flutter',
            imageUrl: '/images/flutter.png'
        },
        {
            technologies: 'Native Android',
            imageUrl: '/images/android.png'
        }],
    backend: [
        {
            technologies: 'ExpressJS',
            imageUrl: '/images/express.png'
        },
        {
            technologies: 'Spring Boot',
            imageUrl: '/images/spring.png'
        },
        {
            technologies: 'NextJS',
            imageUrl: '/images/nextjs.png'
        },
    ],
    database: [
        {
            technologies: 'MongoDB',
            imageUrl: '/images/mongodb.png'
        },
        {
            technologies: 'MySQL',
            imageUrl: '/images/mysql.png'
        },
        {
            technologies: 'PostgreSQL',
            imageUrl: '/images/postgresql.png'
        },
    ],
    cloud: [
        {
            technologies: 'Azure',
            imageUrl: '/images/azure.png'
        },
        {
            technologies: 'AWS',
            imageUrl: '/images/aws.png'
        },
        {
            technologies: 'GCP',
            imageUrl: '/images/gcp.png'
        }

    ],
    devops: [
        {
            technologies: 'Docker',
            imageUrl: '/images/docker.png'
        },
        {
            technologies: 'Jenkins',
            imageUrl: '/images/jenkins.png'
        },
        {
            technologies: 'CircleCI',
            imageUrl: '/images/circleci.png'
        }
    ]
}

export default function Technologies({ id }) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <VizSensor
            onChange={(isVisible) => {
                setIsVisible(isVisible);
            }}>
            <Fade in={isVisible} timeout={1000}>
                <Stack
                    id={id}
                    spacing="0.8rem"
                    sx={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Typography variant="h4" component="div">
                        Technologies
                    </Typography>
                    <Grid container spacing="2rem">
                        <Grid item xs={2} sm={6} md={4} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Typography variant="h6" component="div">
                                Frontend
                            </Typography>
                            <Stack container spacing={2} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '1rem',

                            }}>
                                {technologies.frontend.map((technology) => (
                                    <TechnologyCard
                                        key={technology.technologies}
                                        technology={technology.technologies}
                                        imageUrl={technology.imageUrl}
                                    />

                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={6} md={4} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Typography variant="h6" component="div">
                                Mobile
                            </Typography>
                            <Stack
                                container
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '1rem',

                                }}>
                                {technologies.mobile.map((technology) => (
                                    <TechnologyCard
                                        key={technology.technologies}
                                        technology={technology.technologies}
                                        imageUrl={technology.imageUrl}
                                    />

                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={6} md={4} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Typography variant="h6" component="div">
                                Backend
                            </Typography>
                            <Stack
                                container
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '1rem',

                                }}>
                                {technologies.backend.map((technology) => (
                                    <TechnologyCard
                                        key={technology.technologies}
                                        technology={technology.technologies}
                                        imageUrl={technology.imageUrl}
                                    />

                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={6} md={4} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Typography variant="h6" component="div">
                                Database
                            </Typography>
                            <Stack
                                container
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '1rem',

                                }}>
                                {technologies.database.map((technology) => (
                                    <TechnologyCard
                                        key={technology.technologies}
                                        technology={technology.technologies}
                                        imageUrl={technology.imageUrl}
                                    />

                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={6} md={4} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Typography variant="h6" component="div">
                                Cloud
                            </Typography>
                            <Stack
                                container
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '1rem',

                                }}>
                                {technologies.cloud.map((technology) => (
                                    <TechnologyCard
                                        key={technology.technologies}
                                        technology={technology.technologies}
                                        imageUrl={technology.imageUrl}
                                    />

                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={6} md={4} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Typography variant="h6" component="div">
                                DevOPS
                            </Typography>
                            <Stack
                                container
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '1rem',

                                }}>
                                {technologies.devops.map((technology) => (
                                    <TechnologyCard
                                        key={technology.technologies}
                                        technology={technology.technologies}
                                        imageUrl={technology.imageUrl}
                                    />

                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Fade>
        </VizSensor>
    )
}