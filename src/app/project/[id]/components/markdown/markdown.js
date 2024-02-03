"use client";
import React from "react";
import MuiMarkdown from "mui-markdown";
import { Box } from "@mui/material";

export default function MarkDown({ markdown }) {
    return (
        <Box sx={{

        }}>
            <MuiMarkdown>
                {markdown}
            </MuiMarkdown>
        </Box>
    );
}