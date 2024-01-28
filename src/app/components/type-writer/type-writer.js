import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)`
  &.typewriter-effect {
    display: flex;
    justify-content: center;
    font-family: monospace;
  }

  &.typewriter-effect > .text {
    max-width: 0;
    animation: typing 3s steps(var(--characters)) infinite;
    white-space: nowrap;
    overflow: hidden;
  }

  &.typewriter-effect:after {
    content: " |";
    animation: blink 1s infinite;
    animation-timing-function: step-end;
  }

  @keyframes typing {
    75%,
    100% {
      max-width: calc(var(--characters) * 1ch);
    }
  }

  @keyframes blink {
    0%,
    75%,
    100% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
  }
`;

export default function TypeWriter({ text }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
      setTimeout(() => {
        if (index < text.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }, 3000);
  }, [index, text]);

  const styles = {
    "--characters": text[index].length
  };

  return (
    <StyledBox className="typewriter-effect">
      <Box style={styles} className="text" id="typewriter-text">
        {text[index]}
      </Box>
    </StyledBox>
  );
}