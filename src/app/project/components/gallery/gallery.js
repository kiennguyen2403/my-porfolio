import { Stack, Typography, Box, Grid } from "@mui/material";
import ProjectCard from "../project-card/project-card";
import { variable } from "@/app/lib/variable";
import axios from 'axios';


const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'This is a description for project 1',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/1',
        status: 'in-progress',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is a description for project 2',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/2',
        status: 'in-progress',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'This is a description for project 3',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/3',
        status: 'in-progress',
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'This is a description for project 4',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/4',
        status: 'in-progress',
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'This is a description for project 5',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/5',
        status: 'in-progress',
    },
    {
        id: 6,
        title: 'Project 6',
        description: 'This is a description for project 6',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/6',
        status: 'in-progress',
    },
    {
        id: 7,
        title: 'Project 7',
        description: 'This is a description for project 7',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/7',
        status: 'in-progress',
    },
    {
        id: 8,
        title: 'Project 8',
        description: 'This is a description for project 8',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/8',
        status: 'in-progress',
    },
    {
        id: 9,
        title: 'Project 9',
        description: 'This is a description for project 9',
        image: './vercel.svg',
        link: variable.URL + variable.PORT + '/project/9',
        status: 'in-progress',
    },
]


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
                        <Grid item xs={4} sm={6} md={4} key={i}>
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                status={project.status}
                                description={project.description}
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