import React from 'react';
import RootLayout from "../components/layout/RootLayout";
import HeaderDetail from "../components/layout/HeaderDetail";
import axios from "axios";
import {Typography} from "@mui/material";

const Detail = ({data}) => {

    const wpm = 225;
    const words = data.body.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

    return (
        <RootLayout>
            <HeaderDetail/>
            <Typography variant="h1"  lineHeight={'2.625rem'}>
                {data.title}
            </Typography>
            <small style={{fontSize:'80%'}}>
                {`July 7, 2021 • ☕️️ ${time} min read`}
            </small>
            <Typography variant={"body1"} mt={'1.75rem'}>
                {data.body}
            </Typography>
        </RootLayout>
    );
};
export default Detail;

export async function getServerSideProps(context) {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`);
    const data=res.data
    return {
        props: {
            data,
        },
    };
}

// export async function getStaticPaths() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const paths =res.data.map((item) => ({ params: { title: item.title } }));
//     return {
//         paths,
//         fallback: "blocking",
//     };
// }
