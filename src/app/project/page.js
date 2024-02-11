import { Box, Stack } from "@mui/material";
import Gallery from "./components/gallery/gallery";


export default function Work() {
    return (
        <Box style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10rem',
            marginBottom: '10rem',
        }}>
            <Stack
                spacing='5rem'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <Gallery />
            </Stack>
        </Box>
    )
}