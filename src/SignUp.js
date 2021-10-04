import { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailtouched, setEmailtouched] = useState(false);
    const [passwordtouched, setPasswordtouched] = useState(false);

    let isEmailValid = false;
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        isEmailValid = false;
    } else {
        isEmailValid = true
    }

    let emailInvalid = !isEmailValid && emailtouched

    let passwordValid = false;
    if (password.length > 5) {
        passwordValid = true
    }
    let passwordInvalid = !passwordValid && passwordtouched;

    const submithandler = (e) => {
        e.preventDefault();
        //your submit code goes here
        alert("You are signup");
        setEmail('');
        setPassword('');
        setEmailtouched(false);
        setPasswordtouched(false);
    }
    return (<form className="signup center" onSubmit={submithandler} >
        <div className="signup__header">
            <p>SignUp Form</p>
        </div>
        <div className="inputbox">
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email center"
                style={emailInvalid ? { border: "1px solid red" } : {}}
                placeholder="Enter Your Email"
                onBlur={() => setEmailtouched(true)} />
            {emailInvalid && <p className="errormsg center">Enter a valid Email </p>}
        </div>
        <div className="inputbox">
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pass center"
                placeholder="Choose Your Password"
                style={emailInvalid ? { border: "1px solid red" } : {}}
                onBlur={() => setPasswordtouched(true)} />
            {passwordInvalid && <p className="errormsg center">password should be greater then 5 character</p>}
        </div>
        <button className="center" type="submit" disabled={emailInvalid || passwordInvalid}>Sign Up</button>
    </form>)
}

export default SignUp;