import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "../pages/theme";
import {useSelector} from "react-redux";


export function Providers({ children }) {
    const theme = useSelector((state) => state.theme)
    return (
        <ThemeProvider theme={theme.darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
                {children}
        </ThemeProvider>
    );
}