import React from "react";
import { Card, Skeleton, Stack } from "@mui/material";

const Loading = () => {
    return (
        <Stack spacing={1} sx={{
            margin: "2rem",
            marginTop: "5rem",
        }}>
            {/* For variant="text", adjust the height via font-size */}

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width="10rem" height="10rem" />
            <Skeleton variant="text" sx={{ fontSize: '4rem', textAlign: "center" }} />
            <Skeleton variant="rectangular" width="80vw" height="30vh" />
            <Skeleton variant="rounded" width="90vw" height="20vh" />
        </Stack>
    );
};

export default Loading;
