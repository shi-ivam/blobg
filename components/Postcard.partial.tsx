export default (props) => {
    return (
        <div className="post" onClick={() => {window.location.href="/posts/" + props.slug}}>
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
                    {props.title}
                </div>
                <div className="tags">
                    {
                        props.tags.map(e => (

                            <div className="tag">
                                <div className="hash">#</div>e
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="props">
                <div className="attri">
                    <div className="hearts">
                        <p>{props.hearts}</p>
                        <div className="heart">Hearts</div>
                    </div>
                    <div className="hearts">
                        <p>{props.comments}</p>
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
    );
};
