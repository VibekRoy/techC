import React, { useRef, useState, useEffect } from "react";

//import axios from './api/axios';
import axios from 'axios';



//regex type variables for username and password constraints 
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9!@#$%]).{6,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef(); // for focus on username box when screen loads
    const errRef = useRef();// for focus of that element where there is a error after submission

    //now first one is for typing and storing the value in input boxes, 2nd is for whether the name is valid or not and 3rd is for whether the focus is on that element or notc
    // username box
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    //password box
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    //match password box
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // for error message and success check
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        axios.get("/found").then(res => setNotes(res.data));
        // .then(res => res.json())
        
        notes.forEach((notes)=>{
            const st=notes.Username;
            if (user===st)
            {
                setErrMsg('Username Taken');
                userRef.current.focus();
            }
        })
        }, [user, notes])

    useEffect(() => { // sets focus of username box
        userRef.current.focus();
    }, [])

    useEffect(() => { 
        // validates username and we have user array in [] so it checks everytime there is a change in username
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => { //validates whether the password is valid or not and then checks match password and password same or not
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async () => {
       

        try {
            
            const Note={
                Username: user,
                Password: pwd
                        }
            console.log(Note);
            axios.post(REGISTER_URL,Note,{Unique: true});           
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
                    }
        catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');
            } else if (err.response.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section className="App sec">
                    <h1>Success!</h1>
                    <p>
                        <a href="\">Sign In</a>
                    </p>
                </section>
            ) : (
                <section className="App sec">

                
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="reg">
                    <h1>Register</h1>
                    </div>
                    <form onSubmit={handleSubmit} className='polo'>
                        <label htmlFor="username">
                            Username:
                            
                        </label>
                        <input
                            className='kolo'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="password">
                            Password:
                            
                        </label>
                        <input
                            className='kolo'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                           
                            6 to 24 characters.<br />
                            Must include uppercase and lowercase letters and a number.<br />
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            
                        </label>
                        <input
                            className='kolo'
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            
                            Must match the first password input field.
                        </p>
                        
                        <button className='butto kolo neon' disabled={!validName || !validPwd || !validMatch ? true : false}>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            <span className="voyla"></span>
                            Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="\">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register;