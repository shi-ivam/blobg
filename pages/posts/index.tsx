import Header from '../../components/Header.partial';
import Head from "next/head";
import dbConnect from '../../utils/dbConnect.js';
import jwt from 'jsonwebtoken';
import user from '../../models/user.js';

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
            return {
                props: { auth: true }, // Will be passed to the page component as props
            };
        } else {
            var res = context.res;
            res.statusCode = 302;
            res.setHeader("Location", `/auth`); // Replace <link> with your url link
            return { props: {} };
        }
    }
}


export default (props) => {
    return (
        <div className="container">
            
            <Head>
                <title>Login / Signup</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header auth={props.auth}/>
            <div className="post-wrap">
                
            </div>
        </div>
    )
}