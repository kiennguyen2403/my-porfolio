import { Stack } from "@mui/material";
import InformationSection from "./components/information-section/information-section";
import AboutMe from "./components/about-me-section/about-me";
import Technologies from "./components/technologies-section/technologies";
import Projects from "./components/projects-section/projects";
import Grow from '@mui/material/Grow';
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <div style={{
      width: '100vw',
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
        <Technologies />
        <Projects />
      </Stack>
      <Footer />
    </div>
  );
}
