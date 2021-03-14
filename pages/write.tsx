import Head from "next/head";
import axios from "axios";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import Header from "../components/Header.partial";
import dbConnect from "../utils/dbConnect.js";
import { createRef, useState } from "react";
import Modal from "react-modal";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { v4 } from "uuid";

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
    const titleRef: React.RefObject<HTMLInputElement> = createRef();
    const thumbRef: React.RefObject<HTMLInputElement> = createRef();
    const tagsRef: React.RefObject<HTMLInputElement> = createRef();
    const bodyRef: React.RefObject<HTMLInputElement> = createRef();
    const uploadImage: React.RefObject<HTMLInputElement> = createRef();

    const [suggestedTag, setSuggestedTag] = useState("React");
    const [tags, setTags] = useState([]);
    const [suggested, setSuggested] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [crop, setCrop] = useState({ height: 0, width: 0 ,unit:'%'});
    const [imageSrc, setImageSrc] = useState("");
    const [uploading, setUploading] = useState(false);

    // Uploaded Image

    const [images, setImages] = useState([]);

    const handleUpload = () => {

        console.log(crop);
        return

        const text = bodyRef.current.value;
        console.log(text);
        var formData = new FormData();
        var imagefile = thumbRef.current;
        console.log(imagefile);
        formData.append("image", imagefile.files[0]);
        formData.append("title", titleRef.current.value);
        formData.append("body", bodyRef.current.value);
        formData.append("tags", JSON.stringify(tags));
        formData.append("crop", JSON.stringify(crop));
        formData.append("images", JSON.stringify(images));
        axios
            .post("/api/uploadpost", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                if (response.data.type === "created") {
                    setUploading(true)
                    setTimeout(() => {
                        window.location.href = "/posts/" + response.data.slug;
                    }, 4000);
                }
            });
    };
    const handleKeyPress = (e) => {
        if (e.which == 13 && suggested && tags.length <= 10) {
            setTags(tags.concat(suggested));
            tagsRef.current.value = "";
            setSuggested("");
        }
    };
    const handleTagInputChange = (e) => {
        if (e.target.value === suggestedTag.slice(0, e.target.value.length)) {
            setSuggested(suggestedTag);
        }
        if (e.target.value === "") {
            setSuggested("");
        }
    };
    const handleFileInputChange = () => {
        const file = thumbRef.current.files[0];
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            function () {
                // convert image file to base64 string
                setImageSrc(String(reader.result));
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
        setModalIsOpen(true);
    };

    const handleModalSubmit = (e) => {
        setCrop(e);
    };
    const handleModalButtonClose = () => {
        console.log(crop);
        if (crop.height == 0 || crop.width == 0) {
            return;
        }
        setModalIsOpen(false);
    };
    const handleBodyImageUpload = () => {
        const fileInput = uploadImage.current;
        console.log(fileInput.files);
        if (!fileInput.files.length) {
            alert("No Image is Selected");
            return;
        }
        const file = fileInput.files[0];

        const reader = new FileReader();

        reader.addEventListener(
            "load",
            function () {
                // convert image file to base64 string
                const id = v4();
                setImages(images.concat({ base: String(reader.result), id }));
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="container">
            <Head>
                <title>Write</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header auth={props.auth} />
            {uploading ? (
                <div className="uploading">
                    Uploading...
                </div>
            ) : (
                <section className="write">
                    <div className="sectionTitle">Write</div>
                    <div className="post">
                        <div className="one-grp grp">
                            <label htmlFor="">Title</label>
                            <input type="text" ref={titleRef} />
                        </div>
                        <div className="two-grp grp">
                            <div className="single-input">
                                <label htmlFor="">Thumbnail</label>
                                <input
                                    type="file"
                                    name=""
                                    onChange={handleFileInputChange}
                                    id="act-btn"
                                    ref={thumbRef}
                                />
                            </div>
                            <div className="single-input">
                                <label htmlFor="">Tags</label>
                                <div className="tag-input">
                                    <input
                                        type="text"
                                        onChange={handleTagInputChange}
                                        onKeyPress={handleKeyPress}
                                        ref={tagsRef}
                                    />
                                    <p>{suggested}</p>
                                </div>
                            </div>
                        </div>
                        {tags.length ? (
                            <div className="tags">
                                <label htmlFor="">Tags</label>
                                <ul>
                                    {tags.map((e) => (
                                        <li>{e}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            false
                        )}
                        <div className="one-grp grp">
                            <p className="label">Images</p>
                            <div className="images">
                                <div className="imgs">
                                    {images.map((e) => {
                                        return (
                                            <div className="wrap">
                                                <div className="img-inr">
                                                    <img
                                                        src={String(e.base)}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="link">
                                                    <h3>Shortcode : </h3>
                                                    <p>{e.id}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="upload-images">
                                <input type="file" ref={uploadImage} />
                                <button onClick={handleBodyImageUpload}>
                                    Upload
                                </button>
                            </div>
                        </div>
                        <div className="md grp">
                            <label htmlFor="">Body</label>
                            <textarea name="" ref={bodyRef} id=""></textarea>
                        </div>
                        <div className="btns grp">
                            <button onClick={handleUpload}>Publish</button>
                        </div>
                    </div>
                </section>
            )}
            <div className="divider"></div>
            <div className="footer">
                <div className="main">made with {"<3"} by shivam kumar</div>
                <div className="sec">using Nextjs, Mongodb and Node</div>
            </div>
            <Modal
                onRequestClose={() => {
                    setModalIsOpen(false);
                }}
                isOpen={modalIsOpen}
                contentLabel="Resize Thumbnail"
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <CropDemo src={imageSrc} submit={handleModalSubmit} />
                    <button
                        className="modal-button"
                        onClick={handleModalButtonClose}
                    >
                        Submit
                    </button>
                </div>
            </Modal>
        </div>
    );
};

function CropDemo(props: any) {
    const [crop, setCrop] = useState({ aspect:3/1 });
    return (
        <ReactCrop
            src={props.src}
            crop={crop}
            onChange={(newCrop) => {
                setCrop(newCrop);
                props.submit(newCrop);
            }}
        />
    );
}
