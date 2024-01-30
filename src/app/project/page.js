import { Stack } from "@mui/material";
import Gallery from "./components/gallery/gallery";


export default function Work() {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30rem',
            marginBottom: '10rem',
        }}>
            <Stack
                spacing='5rem'
                sx={{
                    marginBottom: '10rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <Gallery />

            </Stack>
        </div>
    )
}