import React from 'react';
import {Avatar, Box, Link, Typography} from "@mui/material";


const Aside = props => {
    return (
        <aside>
            <Box sx={{display:'flex',flexDirection:'row'}}>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/avatar.jpg"
                    sx={{ width: 56, height: 56,marginRight:'1rem' }}
                />
                <Typography variant="body1" maxWidth={'310px'}>
                    Personal blog by <Link underline="hover" color={"text.secondary"} href={'https://mobile.twitter.com/dan_abramov'}>Dan Abramov</Link>.{`\n`}
                    I explain with words and code.
                </Typography>
            </Box>

        </aside>
    );
};


export default Aside;