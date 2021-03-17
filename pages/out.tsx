import Head from "next/head";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import Header from "../components/Header.partial";
import dbConnect from "../utils/dbConnect.js";

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
        const db = await dbConnect();
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
                props: {
                    auth: true,
                },
            };
        } else {
            return {
                props: { auth }, // Will be passed to the page component as props
            };
        }
    }
}

export default (props) => {
    const handleLogout = () => {
        window.location.href = '/api/logout'
    }
    return (
        <div className="container">
            <Head>
                <title>Logout</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header auth={props.auth} />
            <div className="logout">
                <div className="center">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div className="divider"></div>
            <div className="footer">
                <div className="main">made with {"<3"} by shivam kumar</div>
                <div className="sec">using Nextjs, Mongodb and Node</div>
            </div>
        </div>
    );
};
