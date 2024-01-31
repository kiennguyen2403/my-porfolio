"use client";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Stack, Typography } from '@mui/material';

export default function ExperienceTree({ data }) {

    return (
        <Timeline position="alternate">
            {data?.map((item) => (
                <TimelineItem key={item}>
                    <TimelineOppositeContent color="text.secondary">
                        {item.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Stack spacing={1}
                            sx={{
                                marginBottom: '2rem',
                            }}>
                            <Typography variant="h6" component="span">
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle2" component="span" color={'text.secondary'}>
                                {item.description}
                            </Typography>
                        </Stack>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}