import { createRef,useState} from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Auth(){
    const [login,setLogin] = useState(true);
    const unameRef:React.RefObject<HTMLInputElement> = createRef();
    const emailRef:React.RefObject<HTMLInputElement> = createRef();
    const passwordRef:React.RefObject<HTMLInputElement> = createRef();
    const cpasswordRef:React.RefObject<HTMLInputElement> = createRef();
    const handleSubmit = () => {
        console.log(login)
        if (login){
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            
            axios.post('/api/auth',{
                email,
                type:'login',
                passwd:password
            })
            .then((data) => {
                console.log(data)
            })
        }
    }
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
                        {
                            !login ? 
                            <div className="input">
                                <label htmlFor="">Username</label>
                                <input ref={unameRef} type="text" placeholder="email"/>
                            </div>
                            :
                            false
                        }
                        <div className="input">
                            <label htmlFor="">Email</label>
                            <input ref={emailRef} type="text" placeholder="email"/>
                        </div>
                        <div className="input">
                            <label htmlFor="">Password</label>
                            <input ref={passwordRef} type="password" placeholder="password"/>
                        </div>
                        {
                            !login ?    
                            <div className="input">
                                <label htmlFor="">Confirm Password</label>
                                <input ref={cpasswordRef} type="password" placeholder="password"/>
                            </div>
                            :
                            false
                        }
                    </div>
                    <div className="buttons">
                        <button className="primary" onClick={handleSubmit}>
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