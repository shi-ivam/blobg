import { createRef, useState } from "react";
import Head from "next/head";
import axios from "axios";
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
import Header from '../components/Header.partial';

export async function getServerSideProps(context) {
    // Default auth to false
    let auth = false;

    // check token and verify valid user
    if (!context.req.headers.cookie){
        return {
            props:{
                auth
            }
        }
    }
    else{
        console.log(context.req.headers.cookie.split('=')[1])
        const jwtUser = jwt.verify(context.req.headers.cookie.split('=')[1],process.env.JWTSECRET);
        const foundUser = await user.findOne({id:jwtUser.userId});
        if (foundUser){
            var res = context.res;
            res.statusCode = 302
            res.setHeader('Location', `/topics`) // Replace <link> with your url link
            return {props: {}}
        }
        else{

            return {
                props: {auth}, // Will be passed to the page component as props
            }
        }
    }

  }


export default function Auth(props) {
    const [login, setLogin] = useState(true);
    const unameRef: React.RefObject<HTMLInputElement> = createRef();
    const emailRef: React.RefObject<HTMLInputElement> = createRef();
    const passwordRef: React.RefObject<HTMLInputElement> = createRef();
    const cpasswordRef: React.RefObject<HTMLInputElement> = createRef();
    const handleSubmit = () => {
        console.log(login);
        if (login) {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;

            axios
                .post("/api/auth", {
                    email,
                    type: "login",
                    passwd: password,
                })
                .then((res) => {
                    if (res.data.type === "success") {
                        window.location.href = "/topics";
                    } else {
                        alert(`Failed due to : ${res.data.reason}`);
                    }
                });
        } else {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            const cpasswd = cpasswordRef.current.value;
            const username = unameRef.current.value;
            axios
                .post("/api/auth", {
                    email,
                    type: "signup",
                    passwd: password,
                    cpasswd,
                    username,
                })
                .then((res) => {
                    if (res.data.type === "success") {
                        window.location.href = "/topics";
                    } else {
                        alert(`Failed due to : ${res.data.reason}`);
                    }
                });
        }
    };
    return (
        <div className="container">
            <Head>
                <title>Login / Signup</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header auth={props.auth}/>
            <div className="loginwrap">
                <div className="loginForm">
                    <div className="sectionTitle">
                        {login ? "Login" : "Signup"}
                    </div>
                    <div className="inputs">
                        {!login ? (
                            <div className="input">
                                <label htmlFor="">Username</label>
                                <input
                                    ref={unameRef}
                                    type="text"
                                    placeholder="email"
                                />
                            </div>
                        ) : (
                            false
                        )}
                        <div className="input">
                            <label htmlFor="">Email</label>
                            <input
                                ref={emailRef}
                                type="text"
                                placeholder="email"
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="">Password</label>
                            <input
                                ref={passwordRef}
                                type="password"
                                placeholder="password"
                            />
                        </div>
                        {!login ? (
                            <div className="input">
                                <label htmlFor="">Confirm Password</label>
                                <input
                                    ref={cpasswordRef}
                                    type="password"
                                    placeholder="password"
                                />
                            </div>
                        ) : (
                            false
                        )}
                    </div>
                    <div className="buttons">
                        <button className="primary" onClick={handleSubmit}>
                            {login ? "Login" : "Signup"}
                        </button>
                        <button
                            className="secondary"
                            onClick={() => {
                                setLogin(!login);
                            }}
                        >
                            {login ? "Signup" : "Login"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="footer">
                <div className="main">
                made with {"<3"} by shivam kumar
                </div>
                <div className="sec">
                using Nextjs, Mongodb and Node
                </div>
            </div>
        </div>
    );
}
