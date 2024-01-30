import { Box } from '@mui/material';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function CommitHistory({ data }) {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        
        }}>
            <GitHubCalendar
                username="kiennguyen2403"
                blockSize={15}
                blockMargin={5}
                colorScheme='dark'
                style={{
                    fontStyle: 'roboto'
                }}
            />
        </Box>
    )
}


