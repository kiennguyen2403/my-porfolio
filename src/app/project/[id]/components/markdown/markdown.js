"use client";
import React from "react";
import MuiMarkdown from "mui-markdown";
import { Box } from "@mui/material";

export default function MarkDown({ markdown }) {
    return (
        <Box sx={{

        }}>
            <MuiMarkdown>
                {`<img src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" alt="React">`}
            </MuiMarkdown>
        </Box>
    );
}