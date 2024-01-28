import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: "monospace"

    },
    components: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    background: 'linear-gradient(to right, #434343 0%, black 100%)',
                }

            }
        },
    }
});

export default theme;