import React from "react";
import { Box, Card, Grid, Skeleton, Stack } from "@mui/material";

const Loading = () => {
    return (
        <Stack
            spacing='3rem'
            sx={{
                width: '100vw',
                display: 'flex',
                direction: 'row',
                alignItems: 'center',
                margin: "auto"
            }}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Box sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '80vw',
            }}>
                <Grid container spacing={4}>
                    <Grid item xs={4} sm={6} md={4}>
                        <Skeleton variant="rounded" width="20vw" height="20vh" />
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Skeleton variant="rounded" width="20vw" height="20vh" />
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Skeleton variant="rounded" width="20vw" height="20vh" />
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Skeleton variant="rounded" width="20vw" height="20vh" />
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Skeleton variant="rounded" width="20vw" height="20vh" />
                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Skeleton variant="rounded" width="20vw" height="20vh" />
                    </Grid>

                </Grid>
            </Box>
        </Stack>
    );
};

export default Loading;
