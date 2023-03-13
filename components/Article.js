import React from 'react';
import {Box, Link, Typography} from "@mui/material";


const Article = ({item}) => {
    const url=item.title.replaceAll(" ","-")

    const wpm = 225;
    const words = item.body.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

    return (
        <article style={{marginTop:'2.5rem',marginBottom:'2.5rem'}}>
            <Box>
                <Typography variant={"h3"} color="text.secondary" mb={'0.5rem'}>
                    <Link underline="none" href={`/${url}`} color="text.secondary">
                        {item.title}
                    </Link>
                </Typography>
                <small style={{fontSize:'80%'}}>
                    {`${'July 7, 2021'} • ️☕️ ${time} min read`}
                </small>
                <Typography variant={"body1"}>
                    {item.body}
                </Typography>
            </Box>
        </article>
    );
};


export default Article;