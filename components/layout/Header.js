import React from 'react';
import {Box, Switch, Typography} from "@mui/material";
import SwitchBtn from "../SwitchBtn";

const Header = () => {
    return (
        <header style={{marginBottom:'2.5rem'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography variant="h1"  lineHeight={'2.625rem'}>
                    Overreacted
                </Typography>
                <SwitchBtn/>
            </Box>
        </header>
    );
};

export default Header;