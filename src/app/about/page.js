import { Box, Stack, Typography } from "@mui/material";
import InformationSection from "../components/information-section/information-section";
import AboutMe from "../components/about-me-section/about-me";
import CommitHistory from "./components/commit-history/commit-history";

export default function About() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}>
            <Stack
                spacing='5rem'
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
                    {/* <CommitHistory /> */}
            </Stack>
        </Box>
    )
}