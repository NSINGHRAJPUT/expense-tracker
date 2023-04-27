import { useRef } from "react"
import './Signup.css'

const Signup = () =>{
    let email = useRef();
    let password = useRef();
    let confirmPassword = useRef();

    const signupHandler = (e) =>{
        e.preventDefault();
        if(password.current.value !== confirmPassword.current.value){
            alert('Password and confirm password must be same')
        }else{
        let obj={
            email:email.current.value,
            password:password.current.value,
            returnSecureToken:true
        }
        console.log(obj)
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4',
            {
                method: 'POST',
                body: JSON.stringify(obj),
                headers : {
                        'Content-Type' : 'application/json'
                }
            }
        ).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>alert(err))
        }   
        
    }

    return <div className="container">
            <h2>Sign Up Form</h2>
            <form onSubmit={signupHandler} className="signup-form">
                <label>Email Id</label>
                <input type="email" ref={email}></input><br/>
                <label>Password</label>
                <input type="password" ref={password}></input><br/>
                <label>Confirm Password</label>
                <input type="password" ref={confirmPassword}></input><br/>
                <button type="Submit" >Sign Up</button>
            </form>
    </div>
}

export default Signup