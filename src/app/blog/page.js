import { Box, Typography } from "@mui/material";

export default function Blog() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}>
            <Typography variant="h3" component="div">
                Comming Soon...
            </Typography>
        </Box>
    )
}