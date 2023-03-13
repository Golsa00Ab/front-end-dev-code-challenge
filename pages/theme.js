import {createTheme} from "@mui/material";
const typography= {
    h1:{
        fontFamily: ["Montserrat","sans-serif"].join(','),
            fontSize:'2rem',
            fontWeight:900,
    },
    h3:{
        fontFamily: ["Montserrat","sans-serif"].join(','),
            fontSize:'1.75rem',
            fontWeight:900
    },
    body1:{
        fontFamily: ["Merriweather","Georgia","serif"].join(','),
            fontWeight:400,
    }
}
export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            paper:"#fff",
            container:"#fff"
        },
        text: {
            primary: "#222",
            secondary:'#d23669',
            light:'rgb(255, 167, 196)'
        },

    },
    typography:typography
    ,
    link:{
        fontFamily: ["Montserrat","sans-serif"].join(','),
        fontWeight:400,
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            paper: "#282c35",
            container:"#282c35"
        },
        text: {
            primary: "#fff",
            secondary:'#ffa7c4',
            light:'rgb(255, 167, 196)',
        },
    },
    typography:typography,
    link:{
        fontFamily: ["Montserrat","sans-serif"].join(','),
        fontWeight:400,
    }
});