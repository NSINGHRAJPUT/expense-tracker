import { useRef, useState } from "react"
import './Signup.css'
import { useNavigate } from "react-router-dom";

const Signup = () =>{
    const [signup, setSignup] = useState(true);
    let email = useRef();
    let password = useRef();
    let confirmPassword = useRef();
    const nav = useNavigate();

    const switchHandler = (e) =>{
        e.preventDefault();
        setSignup(!signup);
    }

    const signupHandler = (e) =>{
        e.preventDefault();
        let url;
        if(signup){
            if(password.current.value !== confirmPassword.current.value){
                alert('Password and confirm password must be same')
            }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4';
            }
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4'
        }
        
        let obj={
            email:email.current.value,
            password:password.current.value,
            returnSecureToken:true
        }
        console.log(url)
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(obj),
                headers : {
                        'Content-Type' : 'application/json'
                }
            }
        ).then(res=>res.json())
        .then(data=>{
                localStorage.setItem('token',data.idToken)
                nav('/home')        
            console.log(data,'Sign In Successfull')})
        .catch(err=>alert(err))  
        
    }

    return <div className="container">
            <h2>{signup ? "Sign Up Form" : 'Sign In Form'}</h2>
            <form onSubmit={signupHandler} className="signup-form">
                <label>Email Id</label>
                <input type="email" ref={email}></input><br/>
                <label>Password</label>
                <input type="password" ref={password}></input><br/>
                {signup && <label>Confirm Password</label>}
                {signup && <input type="password" ref={confirmPassword}></input>}<br/>
                <button type="Submit" >{signup ? "Sign Up" : "Sign In"}</button>
            </form>
            <br/><br/><br/>
            <button onClick={switchHandler}>{signup ? 'Already Registered!!! Sign In' : "Don't have an account? Sign Up" }</button>
    </div>
}

export default Signup