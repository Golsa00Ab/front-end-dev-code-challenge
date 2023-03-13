import React from 'react';
import RootLayout from "../components/layout/RootLayout";
import HeaderDetail from "../components/layout/HeaderDetail";
import axios from "axios";
import {Typography} from "@mui/material";
import moment from "moment";
import {useRouter} from "next/router";
const readTime=(str)=>{
    const wpm = 225;
    const words = str.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time
}
const Detail = ({data,date}) => {
    const router = useRouter()
    // const item=router.query

    return (
        <RootLayout>
            <HeaderDetail/>
            <Typography variant="h1"  lineHeight={'2.625rem'}>
                {data.title}
            </Typography>
            <small style={{fontSize:'80%'}}>
                {`${moment(date).format('LL')} • ☕️️${readTime(data.body)} min read`}
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
            date:context.query.date
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
