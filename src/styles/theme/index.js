import { createTheme } from "@mui/material"

export const Colors =  {
    primary: '#5f2c3e',
    secondary: '#d1adcc',
    success: '#4caf50',
    info: '#00a2ff',
    danger: '#ff5722',
    warning: '#ffc107',
    dark: '#0e1b20',
    light : '#aaa',
    muted: '#abafb3',
    border: '#dddfe1',
    inserse: '#2f3d4a',
    shaft: '#333',
    dim_grey: '#696969',
    dove_gray: '#d5d5d5',
    body_bg: '#f3f6f9',
    light_gray: 'rgb(230, 230, 230)',
    white: '#fff',
    black: '#000'
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        } 
    },
     components:  {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        }
     }

})
export default theme;