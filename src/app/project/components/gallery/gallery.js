import { Stack, Typography, Box, Grid } from "@mui/material";
import ProjectCard from "../project-card/project-card";
import { variable } from "@/app/lib/variable";
import { projects } from "@/data/project/project";
import axios from 'axios';

export default function Gallery() {
    return (
        <Stack
            spacing='3rem'
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
                Gallery
            </Typography>
            <Box sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '80vw',
            }}>
                <Grid container spacing={4}>
                    {projects.map((project, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                status={project.status}
                                description={project.content.slice(0, 120) + '...'}
                                image={project.image}
                                link={project.link}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}