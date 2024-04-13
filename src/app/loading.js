import React from "react";
import { Skeleton, Stack, Box } from "@mui/material";

const Loading = () => {
    return (
        <Stack
            spacing={1}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                sx={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                }}>
                <Box>
                    <Skeleton variant="circular" width={300} height={300} />
                </Box>
                <Stack
                    spacing={2}
                    direction="column"
                    sx={{
                        alignItems: 'start',
                        '@media (max-width: 600px)': {
                            alignItems: 'center',
                            marginTop: '1rem',
                        },
                    }}>
                    <Skeleton variant="text" sx={{ fontSize: '2rem', textAlign: "center" }} width={300} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem', textAlign: "center" }} width={200} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem', textAlign: "center" }} width={200} />
                </Stack>

            </Stack>
            <Skeleton variant="text" sx={{ fontSize: '3rem', textAlign: "center" }} width="80vw" />
            <Skeleton variant="rectangular" width="80vw" height="30vh" />
        </Stack>
    );
};

export default Loading;
