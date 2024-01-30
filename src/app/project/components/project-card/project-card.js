"use client";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Chip
} from "@mui/material";
import { useRouter } from 'next/navigation'


const Status = {
    'in-progress': 'In Progress',
    'completed': 'Completed',
    'planned': 'Planned',
}

export default function ProjectCard({ title, description, image, link }) {
    const router = useRouter()
    return (
        <Card
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: '2rem',
                boxShadow: '0 0 1rem rgba(0,0,0,0.2)',
            }}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                height="130"
                image="./vercel.svg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Chip label="In Progress" variant="outlined" color="warning" sx={{
                    marginBottom: '1rem',
                    marginTop: '1rem',
                }} />
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{
                    if (link)
                        router.push(link)
                }}>
                    <Typography variant="body2" color="text.secondary">
                        Learn More
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}