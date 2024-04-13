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
                width: '45%',
                height: '200%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.content.slice(0, 120) + '...'}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </Carousel>
        </Stack>
    );
}