import Header from "../../components/Header.partial";
import Head from "next/head";
import dbConnect from "../../utils/dbConnect.js";
import jwt from "jsonwebtoken";
import user from "../../models/user.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart as fasHeart,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { Fade } from "react-reveal";
import Like from "../../models/likes";

export async function getServerSideProps(context) {
    let auth = false;
    let usr = { id: "#" };
    await dbConnect();

    // check token and verify valid user
    if (!context.req.headers.cookie) {
        auth = false;
    } else {
        const jwtUser = jwt.verify(
            context.req.headers.cookie.split("=")[1],
            process.env.JWTSECRET
        );
        const foundUser = await user.findOne({ id: jwtUser.userId });
        usr = foundUser;
        if (foundUser) {
            auth = true;
        }
    }

    const id = context.params.id;
    const response = await axios.get("http://localhost:3000/api/getpost/" + id);
    if (response.data.type === "success") {
        const like = await Like.find({ postId: response.data.postId, userId: usr.id });
        // console.log('----')
        // console.log(like)
        // console.log('----')

        return {
            props: {
                auth: auth,
                title: response.data.title,
                html: response.data.html,
                thumb: response.data.thumb,
                found: true,
                postId: response.data.postId,
                liked: like.length ? true : false,
            }, // Will be passed to the page component as props
        };
    } else {
        return {
            props: {
                auth: true,
                found: false,
                liked: false,
            },
        };
    }
}

export default (props) => {
    const [html, setHtml] = useState(props.html);
    const [title, setTitle] = useState(props.title);
    const [liked, setLiked] = useState(props.liked);
    const [infoCardVisibility, setCardVisibility] = useState(false);
    const [infoCardText,setCardText] = useState('');
    const addLike = () => {
        if (props.auth) {
            axios
                .post("/api/functions/addLike", { postId: props.postId })
                .then((response) => {
                    if (
                        response.data.type === "failed" &&
                        response.data.reason === "invalidauth"
                    ) {
                        window.location.href = "/auth";
                    }
                });
        } else {
            window.location.href = "/auth";
        }
    };
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
                <Fade when={liked} opposite collapse left>
                    <button
                        onClick={() => {
                            setLiked(!liked);
                            addLike();
                        }}
                    >
                        <div style={{ pointerEvents: "none" }}>
                            <FontAwesomeIcon icon={fasHeart} size={"1x"} />
                        </div>
                    </button>
                </Fade>
                <Fade when={!liked} opposite collapse left>
                    <button
                        onClick={() => {
                            setLiked(!liked);
                            addLike();
                        }}
                    >
                        <div style={{ pointerEvents: "none" }}>
                            <FontAwesomeIcon icon={farHeart} size={"1x"} />
                        </div>
                    </button>
                </Fade>
                <div style={{ height: "20px" }}></div>
                <button
                    onClick={() => {
                        setTimeout(() => {
                            setCardVisibility(false);
                        }, 4000);
                        setCardText('Link Copied to Clipboard');
                        setCardVisibility(true);
                    }}
                >
                    <div style={{ pointerEvents: "none" }}>
                        <FontAwesomeIcon icon={faShare} size={"1x"} />
                    </div>
                </button>
            </div>
            <div
                className={
                    infoCardVisibility
                        ? "info-card card-enabled"
                        : "info-card card-disabled"
                }
            >
                {infoCardText}
            </div>
        </div>
    );
};
