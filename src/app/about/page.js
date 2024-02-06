import { Box, Stack, Typography } from "@mui/material";
import InformationSection from "../components/information-section/information-section";
import AboutMe from "../components/about-me-section/about-me";
import CommitHistory from "./components/commit-history/commit-history";
import Technologies from "../components/technologies-section/technologies";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Achievement from "./components/achievement/achievement";

export default function About() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}>
            <Stack
                spacing='8rem'
                sx={{
                    marginTop: '10rem',
                    marginBottom: '10rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}>
                <InformationSection />
                <AboutMe />
                <Experience />
                <Education />
                <Technologies />
                <Achievement />
            </Stack>
        </Box>
    )
}