import { Chip } from "@mui/material";



export default function TechnologyCard({ technology }) {
    return (
        <Chip label={"# " + technology} variant="outlined" color="primary" sx={{
            marginBottom: '1rem',
            marginTop: '1rem',
        }} />
    )
}