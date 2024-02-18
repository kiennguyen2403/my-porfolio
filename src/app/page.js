import { Stack } from "@mui/material";
import InformationSection from "./components/information-section/information-section";
import AboutMe from "./components/about-me-section/about-me";
import Technologies from "./components/technologies-section/technologies";
import Projects from "./components/projects-section/projects";

export default function Home() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
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
        <InformationSection id="information" />
        <AboutMe id="aboutme" />
        <Technologies id="technologies" />
        <Projects id="projects" />
      </Stack>
    </div>
  );
}
