import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        gradient: 'linear-gradient(to right, #434343 0%, black 100%)',
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