import React from 'react';
import {Box, Typography} from "@mui/material";
import Link from "next/link";
import moment from "moment";


const Article = ({item}) => {
    const url=item.title.replaceAll(" ","-")

    const wpm = 225;
    const words = item.body.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

    return (
        <article style={{marginTop:'2.5rem',marginBottom:'2.5rem'}}>
            <Box>
                <Typography variant={"h3"} color="text.secondary" mb={'0.5rem'}>
                    <Link  href={{
                        pathname: `/${url}`,
                        query: {id:item.id},
                    }}
                     style={{color:'inherit',textDecoration:'none'}}>
                        {item.title}
                    </Link>
                </Typography>
                <small style={{fontSize:'80%'}}>
                    {`${moment(item.date).format('LL')} • ️☕️ ${time} min read`}
                </small>
                <Typography variant={"body1"}>
                    {item.body}
                </Typography>
            </Box>
        </article>
    );
};


export default Article;