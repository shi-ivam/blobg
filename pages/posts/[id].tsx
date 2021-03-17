import Header from "../../components/Header.partial";
import Head from "next/head";
import dbConnect from "../../utils/dbConnect.js";
import jwt from "jsonwebtoken";
import user from "../../models/user.js";
import { useEffect, useState } from "react";
import axios from "axios";

export async function getServerSideProps(context) {
    let auth = false;

    await dbConnect();

    // check token and verify valid user
    if (!context.req.headers.cookie) {      
        auth = false;
    }
    else{
    
        const jwtUser = jwt.verify(context.req.headers.cookie.split('=')[1],process.env.JWTSECRET);
        const foundUser = await user.findOne({id:jwtUser.userId});
    
        if (foundUser){
            auth = true;
        }

    }

    const id = context.params.id;
    const response = await axios.get("http://localhost:3000/api/getpost/" + id);
    if (response.data.type === "success") {
        return {
            props: {
                auth: auth,
                title: response.data.title,
                html: response.data.html,
                thumb: response.data.thumb,
                found: true,
            }, // Will be passed to the page component as props
        };
    } else {
        return {
            props: {
                auth: true,
                found: false,
            },
        };
    }
}

export default (props) => {
    const [html, setHtml] = useState(props.html);
    const [title, setTitle] = useState(props.title);
    return (
        <div className="container">
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header auth={props.auth} />
            {props.found ? (
                <div className="post-wrap">
                    <div className="thumb">
                        <img src={props.thumb} alt="" />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            ) : (
                <div className="f0f">404 | Not Found</div>
            )}
            <div className="divider"></div>
            <div className="footer">
                <div className="main">made with {"<3"} by shivam kumar</div>
                <div className="sec">using Nextjs, Mongodb and Node</div>
            </div>
            <div className="overlay">
                <button>{"<3"}</button>
                <button>{"<3"}</button>
            </div>
        </div>
    );
};
