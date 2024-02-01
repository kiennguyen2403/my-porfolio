"use client";
import { Box, Typography } from "@mui/material";
import MarkDown from "./components/markdown/markdown";
import { projects } from "@/data/project/project";

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
                height: '100vh',
            }}>
                <MarkDown markdown={projects[id-1].content} />
            </Box>
        );
    }

}