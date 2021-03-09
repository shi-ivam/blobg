import Head from "next/head";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import Header from "../components/Header.partial";

export async function getServerSideProps(context) {
    // Default auth to false
    let auth = false;

    // check token and verify valid user
    if (!context.req.headers.cookie) {
        return {
            props: {
                auth,
            },
        };
    } else {
        console.log(context.req.headers.cookie.split("=")[1]);
        const jwtUser = jwt.verify(
            context.req.headers.cookie.split("=")[1],
            process.env.JWTSECRET
        );
        const foundUser = await user.findOne({ id: jwtUser.userId });
        if (foundUser) {
            var res = context.res;
            // res.statusCode = 302;
            // res.setHeader("Location", `/topics`); // Replace <link> with your url link
            // return { props: {} };


            // Delete The Cookie `auth`
            // Redirect to new page using client routing with timer
            return {
                props:{
                    auth:true
                }
            }

        } else {
            return {
                props: { auth }, // Will be passed to the page component as props
            };
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
            <div className="center">

            </div>
        </div>
    );
};
