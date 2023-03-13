import {Providers} from "../../providers/Providers";
import {Container, Paper} from "@mui/material";
import Header from "./Header";
import Aside from "./Aside";


export default function RootLayout({ children }) {
    return (
        <Providers>
            <Paper>
                <Container maxWidth="sm" sx={{minHeight:'100vh',py:'2.625rem',px:'1.312rem'}}>
                    {children}
                </Container>
            </Paper>
        </Providers>
    );
}