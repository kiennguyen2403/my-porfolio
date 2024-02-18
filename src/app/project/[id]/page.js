"use client";
import { Box, Button, Divider, IconButton, ImageList, Stack, Typography, ImageListItem } from "@mui/material";
import MarkDown from "./components/markdown/markdown";
import { projects } from "@/data/project/project";
import Image from "next/image";
import { GitHub, Link } from "@mui/icons-material";
import TechnologyCard from "@/app/components/technology-card/technology-card";
import YouTube from "react-youtube";

export default function Work({ params }) {
    const id = params.id;
    if (id - 1 >= projects.length) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}>
                <Typography
                    variant="h4"
                    component="div" >
                    The project does not existed
                </Typography>
            </Box>
        )
    }
    else {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginTop: "5rem"
            }}>
                <Stack spacing={1} sx={{
                    width: '80vw',
                    display: 'flex',
                    direction: 'column',

                }}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            width: '100%',

                        }}>
                        {projects[id - 1].title}
                    </Typography>

                    <Stack spacing={1} direction="row">
                        {
                            projects[id - 1].github ?
                                <IconButton
                                    variant="contained"
                                    href={projects[id - 1].github}
                                    target="_blank"
                                >
                                    <GitHub />
                                </IconButton>
                                : null
                        }
                        {
                            projects[id - 1].deploy ?
                                <IconButton
                                    variant="contained"
                                    href={projects[id - 1]?.deploy}
                                    target="_blank"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <Link />
                                </IconButton>
                                : null
                        }
                    </Stack>
                    <Divider sx={{ width: '100%' }} />
                    {
                        projects?.[id - 1]?.mediaID
                            ? <YouTube 
                            videoId={projects[id - 1].mediaID}
                            opts={{
                                height: '390',
                                width: '640',
                                borderRadius: '10px',
                                playerVars: {
                                    // https://developers.google.com/youtube/player_parameters
                                    autoplay: 1,
                                },
                            }}/> 
                        : null
                    }
                    <Box sx={{ width: '100%' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                            }}>
                            Description
                        </Typography>
                        <Typography>
                            {projects[id - 1].content}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                            }}>
                            Technologies
                        </Typography>
                        <Stack spacing={1}
                            direction="row" sx={{
                                marginTop: '1rem',
                            }}>
                            {projects[id - 1]?.technologies?.map((item) => (
                                <TechnologyCard key={item} technology={item} />
                            ))}
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        );
    }

}