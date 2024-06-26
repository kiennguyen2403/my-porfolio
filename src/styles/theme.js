import { darkScrollbar } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: "light",
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
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#d5d4d0",
                    background: 'linear-gradient(to right,#d5d4d0, #d5d4d0, #eeeeec)',
                },
                '@global': darkScrollbar(),
                '*::-webkit-scrollbar': {
                    width: '0rem',
                    height: '0rem'
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: 'transparent'
                },
            }
        }

    },

});

export default theme;