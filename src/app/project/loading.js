import React from "react";
import { Box, Card, Grid, Skeleton, Stack } from "@mui/material";

const Loading = () => {
    return (
        <Stack
            spacing={3}
            sx={{

                width: '100vw',
                display: 'flex',
                direction: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: "auto",
                marginTop: "10rem",
            }}>
            <Skeleton variant="text" sx={{ fontSize: '3rem', textAlign: "center" }} width="30%" height="10%" />
            <Box sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '80vw',
            }}>
                <Grid container spacing={{
                    xs: 0,
                    md: 3,
                    sm: 2,
                }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rounded" width="100%" height="10vh" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rounded" width="100%" height="10vh" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rounded" width="100%" height="10vh" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rounded" width="100%" height="10vh" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rounded" width="100%" height="10vh" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Skeleton variant="rounded" width="100%" height="10vh" />
                    </Grid>

                </Grid>
            </Box>
        </Stack>
    );
};

export default Loading;
