import { useState} from 'react';
import Head from 'next/head';
export default function Auth(){
    const [login,setLogin] = useState(true);
    return (
        <div className="container">
            <Head>
                <title>Login / Signup</title>
            </Head>
            <div className={"header"}>
                <h1 className={"pageTitle"}>Deblofer</h1>
                <ul className={"navBarUL"}>
                <li className={"navBarULListItem"}>
                    <a href="/auth">Join/Login</a>
                </li>
                <li className={"navBarULListItem"}>
                    <a href="/topics">Topic</a>
                </li>
                </ul>
            </div>
            <div className="loginwrap">
                <div className="loginForm">
                    <div className="sectionTitle">{login ? 'Login' : 'Signup'}</div>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="email"/>
                        </div>
                        <div className="input">
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="password"/>
                        </div>
                        {
                            !login ?    
                            <div className="input">
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" placeholder="password"/>
                            </div>
                            :
                            false
                        }
                    </div>
                    <div className="buttons">
                        <button className="primary">
                            {login ? 'Login' : 'Signup'}
                        </button>
                        <button className="secondary" onClick={() => {
                            setLogin(!login)
                        }}>
                            {login ? 'Signup' : 'Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}