import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: "dark"
    },
    typography: {
        fontFamily: "monospace"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            }
        },
    }
});

export default theme;