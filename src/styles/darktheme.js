import { darkScrollbar } from '@mui/material';
import { createTheme } from '@mui/material/styles';


const darktheme = createTheme({
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
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(to right, #434343 0%, black 100%)',
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

export default darktheme;