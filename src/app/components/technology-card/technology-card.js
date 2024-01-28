import { Box, Card, Paper, Typography } from "@mui/material";
import Image from "next/image";

export default function TechnologyCard({ technology, imageUrl }) {
    return (
        <Paper sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '6rem',
            height: '3rem',
            // boxShadow: '0 0 1rem rgba(0,0,0,0.2)',
        }}>
            <Box sx={{
                margin: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {
                    imageUrl &&
                    <Image
                        src="./next.svg"
                        alt={technology}
                        width={60}
                        height={60}
                      
                    />

                }
            </Box>
        </Paper>
    )
}