import { Box, Card, Chip, Paper, Typography } from "@mui/material";
import Image from "next/image";


export default function TechnologyCard({ technology }) {
    return (
        <Chip label={"# " + technology} variant="outlined" color="primary" sx={{
            marginBottom: '1rem',
            marginTop: '1rem',
        }} />
    )
}