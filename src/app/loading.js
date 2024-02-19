import React from "react";
import { Skeleton, Stack, Box } from "@mui/material";

const Loading = () => {
    return (
        <Stack spacing={1} sx={{
            margin: "2rem",
            marginTop: "5rem",
        }}>
            {/* For variant="text", adjust the height via font-size */}

            {/* For other variants, adjust the size with `width` and `height` */}
            <Box
            sx={{
                display: 'flex',
                direction: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
            }}>
                <Skeleton variant="text" sx={{ fontSize: '5rem', textAlign: "center" }} width="30%" />
                <Skeleton variant="circular" width="10rem" height="10rem" />
            </Box>
            <Skeleton variant="text" sx={{ fontSize: '4rem', textAlign: "center" }} />
            <Skeleton variant="rectangular" width="80vw" height="30vh" />
            <Skeleton variant="rounded" width="90vw" height="20vh" />
        </Stack>
    );
};

export default Loading;
