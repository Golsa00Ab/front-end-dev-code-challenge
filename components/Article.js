import React from 'react';
import {Box, Typography} from "@mui/material";
// import Link from "next/link";
import moment from "moment";
import { useRouter } from 'next/router'

const Article = ({item}) => {
    const url=item.title.replaceAll(" ","-")
    const router = useRouter()

    const wpm = 225;
    const words = item.body.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

    return (
        <article style={{marginTop:'2.5rem',marginBottom:'2.5rem'}}>
            <Box>
                <Typography variant={"h3"} color="text.secondary" mb={'0.5rem'} sx={{cursor:'pointer'}}>
                    <span  onClick={()=>
                    {
                        router.push({
                            pathname: `/${url}`,
                            query: {id:item.id,date:item.date}},`/${url}`)
                    }
                    }
                     style={{color:'inherit',textDecoration:'none'}}>
                        {item.title}
                    </span>
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