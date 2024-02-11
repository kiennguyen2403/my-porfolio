import { Typography, Box, Stack } from "@mui/material";

export default function AboutMe({ id }) {
    return (
        <Stack
            id={id}
            spacing='1rem'
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
                    // textDecoration: 'none',
                    // transition: 'text-decoration 0.8s ease-in-out',
                    // '&:hover': {
                    //     textDecoration: 'underline',
                    // },
                }}>
                About Me
            </Typography>
            <Box sx={{
                marginLeft: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                width: '60vw',
            }}>
                <Typography variant="body1" component="div" >
                    A passionate and innovative student with hands-on experience in web and mobile
                    development. Transitioning into a professional setting, I aspire to create a lasting legacy
                    by contributing unique characteristics to dynamic teams and delivering cutting-edge
                    solutions. Ready to make a lasting impact in technology.
                </Typography>
            </Box>
        </Stack>
    );
}