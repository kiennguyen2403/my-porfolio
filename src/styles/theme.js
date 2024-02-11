import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: "dark"
    },
    typography: {
        fontFamily: "monospace"
    },
    components: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    background: 'linear-gradient(to right, #434343 0%, black 100%)',
                },
                '*::-webkit-scrollbar': {
                    width: '12px', // adjust the width of the scrollbar
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: '#4caf50', // color of the scrollbar thumb
                },
                '*::-webkit-scrollbar-track': {
                    backgroundColor: '#e0e0e0', // color of the scrollbar track
                },
            }
        },
    }
});

export default theme;