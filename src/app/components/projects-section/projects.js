"use client";
import { Stack, Typography } from "@mui/material";
import ProjectCard from "../project-card/project-card";
import Carousel from "react-material-ui-carousel";
import { projects } from "@/data/project/project";


export default function Projects({ id }) {
    return (
        <Stack
            id={id}
            spacing="2rem"
            sx={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Typography variant="h4" component="div">
                Projects
            </Typography>
            <Carousel sx={{
                width: {
                    xs: '80%',
                    sm: '80%',
                    md: '60%',
                    lg: '50%',
                    xl: '40%',
                },
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.content.slice(0, 120) + '...'}
                        image={project.image}
                        link={ 'https://my-porfolio-black.vercel.app/project/' + project.id}
                    />
                ))}
            </Carousel>
        </Stack>
    );
}