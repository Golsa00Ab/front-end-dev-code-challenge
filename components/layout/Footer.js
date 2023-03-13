import React from 'react';
import {Box, Link} from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Box>
                    <Link color={"text.secondary"} href={"https://mobile.twitter.com/dan_abramov"}>twitter{' '}</Link>.
                    <Link color={"text.secondary"} href={"https://github.com/gaearon"}>{' '}github</Link>.
                    <Link color={"text.secondary"} href={"https://stackoverflow.com/users/458193/dan-abramov"}>{' '}stack overflow{' '}</Link>
                </Box>
                <Box>
                    <Link color={"text.secondary"} href={'https://overreacted.io/rss.xml'}>rss</Link>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;