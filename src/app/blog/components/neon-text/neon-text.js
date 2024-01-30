"use client";
import React from 'react';
import { Typography } from '@mui/material';

export default function NeonText({ text }) {
    <Typography variant="h3" component="div" style={{
        color: '#fff',
        textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa',
    }}>
        {text}
    </Typography>
}