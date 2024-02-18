import { Stack, Box } from "@mui/material";
import InformationSection from "./components/information-section/information-section";
import AboutMe from "./components/about-me-section/about-me";
import Technologies from "./components/technologies-section/technologies";
import Projects from "./components/projects-section/projects";

export default function Home() {
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
        <Technologies />
        <Projects />
      </Stack>
    </Box>
  );
}
