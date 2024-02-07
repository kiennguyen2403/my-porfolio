"use client";
import { Box, Button, Divider, IconButton, ImageList, Stack, Typography } from "@mui/material";
import MarkDown from "./components/markdown/markdown";
import { projects } from "@/data/project/project";
import Image from "next/image";
import { GitHub, Link } from "@mui/icons-material";


export default function Work({ params }) {
    const id = params.id;
    if (id - 1 >= projects.length) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
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
                                    <Link/>
                                </IconButton> 
                                : null
                        }
                    </Stack>
                    <Divider sx={{ width: '100%' }} />
                    {/* {
                        projects[id - 1].media ? 
                        <ImageList cols={3} rowHeight={200} sx={{ width: '100%' }}>
                            {projects[id - 1].media.map((item) => (
                                <Image
                                    width={200}
                                    height={200}
                                    key={item.title}
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            ))}
                        </ImageList> : null
                    } */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            width: '100%',
                            textAlign: 'left',
                        }}>
                        Description
                    </Typography>
                    <Typography>
                        {projects[id - 1].content}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            width: '100%',
                            textAlign: 'left',
                        }}>
                        Technologies
                    </Typography>
                    {projects[id - 1]?.technologies?.map((item) => (
                        <Typography
                            key={item}
                            variant="body1"
                            component="div"
                            sx={{
                                width: '100%',
                                textAlign: 'left',
                            }}>
                            {item}
                        </Typography>
                    ))}
                </Stack>
            </Box>
        );
    }

}