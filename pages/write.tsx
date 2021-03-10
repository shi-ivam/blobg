import Head from "next/head";
import axios from "axios";
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
        const jwtUser = jwt.verify(
            context.req.headers.cookie.split("=")[1],
            process.env.JWTSECRET
        );
        const foundUser = await user.findOne({ id: jwtUser.userId });
        console.log("Found uSer", foundUser);
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
            <Header auth={props.auth} />
            <section className="write">
                <div className="sectionTitle">Write</div>
                <div className="post">
                    <div className="one-grp grp">
                        <label htmlFor="">Title</label>
                        <input type="text" />
                    </div>
                    <div className="two-grp grp">
                        <div className="single-input">
                            <label htmlFor="">Thumbnail</label>
                            <input type="file" name="" id="act-btn" />
                        </div>
                        <div className="single-input">
                            <label htmlFor="">Tags</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="md grp">
                        <label htmlFor="">Body</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div className="btns grp">
                        <button>Publish</button>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            <div className="footer">
                <div className="main">made with {"<3"} by shivam kumar</div>
                <div className="sec">using Nextjs, Mongodb and Node</div>
            </div>
        </div>
    );
};
