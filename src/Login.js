import React,{ useRef, useState, useEffect } from "react";


import Tilt from 'react-parallax-tilt';
//import AuthContext from "./context/AuthProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Axios from "./api/axios"
// import ReactDOM from 'react-dom';
const LOGIN_URL = '/Auth';

const Login = () => {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        axios.get("/found").then(res => setNotes(res.data));
        
        console.log(notes);
        notes.forEach((notes)=>{
            const st=notes.Username;
            const tt=notes.Password;
            const pst={
                Username: st,
                Password: tt
            };
            console.log(st);
            if (user===st)
            {
                if (pwd===tt)
                {
                    Axios.post(LOGIN_URL,pst);
                    setSuccess(true);

                }
                else if (pwd!==tt)
                {
                    setErrMsg("Wrong Password for this username");
                    return 0;
                }
                userRef.current.focus();
            }
            else if(user!==st)
            {
                setErrMsg("Either username or password is wrong.");
            }
        })
    }


    return (
        <>
            {success ? (
                <div>
                    {/* NEED TO ADD */}
                </div>
            ) : (
                <Tilt
                className="tilt"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1000}
          scale={0.999}
          gyroscope={true}
                >
                <section className="App sec mcard"> 
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} className='polo'>
                        <label htmlFor="username">Username:</label>
                        <input
                            className='kolo'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            className='kolo'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        
                        <button className='butto kolo neon'>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/put router link here/}
                            <a href="/Register">Sign Up</a>
                        </span>
                    </p>
                </section>
                </Tilt>
            )}
        </>
    )
}

export default Login;