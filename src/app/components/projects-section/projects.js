"use client";
import { Stack, Typography } from "@mui/material";
import ProjectCard from "../project-card/project-card";
import Carousel from "react-material-ui-carousel";


const projects = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum.',
        imageUrl: '/images/project1.png',
        link: 'https://google.com',
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum.',
        imageUrl: '/images/project2.png',
        link: 'https://google.com',
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum.',
        imageUrl: '/images/project3.png',
        link: 'https://google.com',
    },
]
export default function Projects() {    
    return (
        <Stack
            spacing="2rem"
            sx={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Typography variant="h4" component="div">
                Projects
            </Typography>
            <Carousel sx={{
                width: '30vw',
                height: '30vw',
                justifyContent: 'center',
                alignItems: 'center',
            
            }}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </Carousel>
        </Stack>
    );
}