export default (props) => {
    return (
        <div className={"header"}>
            <h1 className={"pageTitle"}>Deblofer</h1>
            <ul className={"navBarUL"}>
                <li className={"navBarULListItem"}>
                    <a href="/write">Write</a>
                </li>
                <li className={"navBarULListItem"}>
                    <a href="/topics">Topic</a>
                </li>
                <li className={"navBarULListItem"}>
                    {
                        props.auth ?
                        <a href="/out">Logout</a>
                        :
                        <a href="/auth">Join/Login</a>
                    }
                </li>
            </ul>
        </div>
    )
}