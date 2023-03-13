import React from 'react';
import {Box, Link, Typography} from "@mui/material";
import SwitchBtn from "../SwitchBtn";

const HeaderDetail = () => {
    return (
        <header style={{marginBottom:'2.5rem'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography variant="h3" lineHeight={'2.625rem'}>
                    <Link underline="none" color={"text.light"} fontSize={'1.5rem'}  href={'/'}>Overreacted</Link>
                </Typography>
                <SwitchBtn/>
            </Box>
        </header>
    );
};

export default HeaderDetail;