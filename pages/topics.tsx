import Head from "next/head";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import Header from "../components/Header.partial";
import dbConnect from "../utils/dbConnect.js";
import fs from "fs";

export async function getServerSideProps(context) {
    // Default auth to false
    let auth = false;

    const tags = fs.readFileSync("./topics.json").toString();

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
        if (foundUser) {
            console.log(foundUser);
            auth = true;
            return {
                props: { auth, tags }, // Will be passed to the page component as props
            };
        } else {
            return {
                props: { auth, tags }, // Will be passed to the page component as props
            };
        }
    }
}

export default (props: any) => {
    const tags = JSON.parse(props.tags);
    return (
        <div className="container">
            <Head>
                <title>Topics</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header auth={props.auth} />
            <div className="flex">
                <div className="topics">
                    {tags.map((e) => (
                        <div className="topic">
                            <a href="#">{e}</a>
                        </div>
                    ))}
                </div>
                <div className="clear"></div>
                <div className="divider"></div>
                <div className="topPostsPosts">
                    <div className="post">
                        <div className="topbar">
                            <div className="content">
                                <div className="image">
                                    <img
                                        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="data">
                                    <div className="name">Shivam Kumar</div>
                                    <div className="date">4 Months Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="postCon">
                            <div className="title">
                                CSS Grid Cheat Sheet Illustrated in 2021🎖️
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                            </div>
                        </div>
                        <div className="props">
                            <div className="attri">
                                <div className="hearts">
                                    <p>800</p>
                                    <div className="heart">Hearts</div>
                                </div>
                                <div className="hearts">
                                    <p>224</p>
                                    <div className="heart">Comments</div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="time">5 Min Read</div>
                                <div className="btn">
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="topbar">
                            <div className="content">
                                <div className="image">
                                    <img
                                        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="data">
                                    <div className="name">Shivam Kumar</div>
                                    <div className="date">4 Months Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="postCon">
                            <div className="title">
                                CSS Grid Cheat Sheet Illustrated in 2021🎖️
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                            </div>
                        </div>
                        <div className="props">
                            <div className="attri">
                                <div className="hearts">
                                    <p>800</p>
                                    <div className="heart">Hearts</div>
                                </div>
                                <div className="hearts">
                                    <p>224</p>
                                    <div className="heart">Comments</div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="time">5 Min Read</div>
                                <div className="btn">
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="topbar">
                            <div className="content">
                                <div className="image">
                                    <img
                                        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="data">
                                    <div className="name">Shivam Kumar</div>
                                    <div className="date">4 Months Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="postCon">
                            <div className="title">
                                CSS Grid Cheat Sheet Illustrated in 2021🎖️
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                            </div>
                        </div>
                        <div className="props">
                            <div className="attri">
                                <div className="hearts">
                                    <p>800</p>
                                    <div className="heart">Hearts</div>
                                </div>
                                <div className="hearts">
                                    <p>224</p>
                                    <div className="heart">Comments</div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="time">5 Min Read</div>
                                <div className="btn">
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="topbar">
                            <div className="content">
                                <div className="image">
                                    <img
                                        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="data">
                                    <div className="name">Shivam Kumar</div>
                                    <div className="date">4 Months Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="postCon">
                            <div className="title">
                                CSS Grid Cheat Sheet Illustrated in 2021🎖️
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                            </div>
                        </div>
                        <div className="props">
                            <div className="attri">
                                <div className="hearts">
                                    <p>800</p>
                                    <div className="heart">Hearts</div>
                                </div>
                                <div className="hearts">
                                    <p>224</p>
                                    <div className="heart">Comments</div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="time">5 Min Read</div>
                                <div className="btn">
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="topbar">
                            <div className="content">
                                <div className="image">
                                    <img
                                        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="data">
                                    <div className="name">Shivam Kumar</div>
                                    <div className="date">4 Months Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="postCon">
                            <div className="title">
                                CSS Grid Cheat Sheet Illustrated in 2021🎖️
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                            </div>
                        </div>
                        <div className="props">
                            <div className="attri">
                                <div className="hearts">
                                    <p>800</p>
                                    <div className="heart">Hearts</div>
                                </div>
                                <div className="hearts">
                                    <p>224</p>
                                    <div className="heart">Comments</div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="time">5 Min Read</div>
                                <div className="btn">
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="topbar">
                            <div className="content">
                                <div className="image">
                                    <img
                                        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="data">
                                    <div className="name">Shivam Kumar</div>
                                    <div className="date">4 Months Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="postCon">
                            <div className="title">
                                CSS Grid Cheat Sheet Illustrated in 2021🎖️
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                            </div>
                        </div>
                        <div className="props">
                            <div className="attri">
                                <div className="hearts">
                                    <p>800</p>
                                    <div className="heart">Hearts</div>
                                </div>
                                <div className="hearts">
                                    <p>224</p>
                                    <div className="heart">Comments</div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="time">5 Min Read</div>
                                <div className="btn">
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="topbar">
                            <div className="content">
                                <div className="image">
                                    <img
                                        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="data">
                                    <div className="name">Shivam Kumar</div>
                                    <div className="date">4 Months Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="postCon">
                            <div className="title">
                                CSS Grid Cheat Sheet Illustrated in 2021🎖️
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                            </div>
                        </div>
                        <div className="props">
                            <div className="attri">
                                <div className="hearts">
                                    <p>800</p>
                                    <div className="heart">Hearts</div>
                                </div>
                                <div className="hearts">
                                    <p>224</p>
                                    <div className="heart">Comments</div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="time">5 Min Read</div>
                                <div className="btn">
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="topbar">
                            <div className="content">
                                <div className="image">
                                    <img
                                        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="data">
                                    <div className="name">Shivam Kumar</div>
                                    <div className="date">4 Months Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="postCon">
                            <div className="title">
                                CSS Grid Cheat Sheet Illustrated in 2021🎖️
                            </div>
                            <div className="tags">
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                                <div className="tag">
                                    <div className="hash">#</div>React
                                </div>
                            </div>
                        </div>
                        <div className="props">
                            <div className="attri">
                                <div className="hearts">
                                    <p>800</p>
                                    <div className="heart">Hearts</div>
                                </div>
                                <div className="hearts">
                                    <p>224</p>
                                    <div className="heart">Comments</div>
                                </div>
                            </div>
                            <div className="actions">
                                <div className="time">5 Min Read</div>
                                <div className="btn">
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="footer">
                    <div className="main">made with {"<3"} by shivam kumar</div>
                    <div className="sec">using Nextjs, Mongodb and Node</div>
                </div>
            </div>
        </div>
    );
};
