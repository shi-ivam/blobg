import Header from "../../components/Header.partial";
import Head from "next/head";
import dbConnect from "../../utils/dbConnect.js";
import jwt from "jsonwebtoken";
import user from "../../models/user.js";
import { useEffect, useState } from "react";
import axios from "axios";

export async function getServerSideProps(context) {
    // Default auth to false
    let auth = false;

    // check token and verify valid user
    if (!context.req.headers.cookie) {
        var res = context.res;
        res.statusCode = 302;
        res.setHeader("Location", `/auth`); // Replace <link> with your url link
        return { props: {} };
    } else {
        const db = await dbConnect();
        const jwtUser = jwt.verify(
            context.req.headers.cookie.split("=")[1],
            process.env.JWTSECRET
        );
        const foundUser = await user.findOne({ id: jwtUser.userId });
        console.log("Found User", foundUser);
        if (foundUser) {
            const id = context.params.id;
            const response = await axios.get( 
                "http://localhost:3000/api/getpost/" + id
            );
            if (response.data.type === 'success'){
                return {
                    props: {
                        auth: true,
                        title: response.data.title,
                        html: response.data.html,
                        thumb:response.data.thumb,
                        found:true
                    }, // Will be passed to the page component as props
                };
            }
            else{
                return {
                    props:{
                        auth:true,
                        found:false
                    }
                }
            }
        } else {
            var res = context.res;
            res.statusCode = 302;
            res.setHeader("Location", `/auth`); // Replace <link> with your url link
            return { props: {} };
        }
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
            {
                props.found ?
                <div className="post-wrap">
                    <div className="thumb">
                        <img src={props.thumb} alt=""/>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
                :
                <div className="f0f">404 | Not Found</div>
            }
            <div className="divider"></div>
            <div className="footer">
                <div className="main">made with {"<3"} by shivam kumar</div>
                <div className="sec">using Nextjs, Mongodb and Node</div>
            </div>
        </div>
    );
};
