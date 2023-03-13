
import RootLayout from "../components/layout/RootLayout";
import {Box, Card, CardContent, Container, Link, Paper, Typography} from "@mui/material";
import Aside from "../components/layout/Aside";
import axios from "axios";
import Footer from "../components/layout/Footer";
import Article from "../components/Article";
import Header from "../components/layout/Header";


export default function Home(props) {
  return (
    <RootLayout>
      <Header/>
      <Aside/>
        {props.data.map((item)=>{
            return <Article item={item} key={item.id}/>
        })}
        <Footer/>
    </RootLayout>
  )
}
export async function getStaticProps () {
  const res = await axios.get("https://mocki.io/v1/1c3ebff6-9ffe-430b-8ba5-c08dcc8c17b2");
  const data=res.data
    const sortData=data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));

  return { props: { data:sortData } }
}