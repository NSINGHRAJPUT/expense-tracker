import { useRef } from "react"
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authentication";

const Signup = () =>{
    const dispatch = useDispatch();
    const isLogged = useSelector(state=>state.auth.isLogged)
    let email = useRef();
    let password = useRef();
    let confirmPassword = useRef();
    const nav = useNavigate();

    const switchHandler = (e) =>{
        e.preventDefault();
        dispatch(authActions.switchHandler())
    }

    const signupHandler = (e) =>{
        e.preventDefault();
        let url;
        if(isLogged){
            if(password.current.value !== confirmPassword.current.value){
                alert('Password and confirm password must be same')
            }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4';
            }
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4'
        }
        let obj={email:email.current.value,password:password.current.value,returnSecureToken:true}
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(obj),
                headers : {
                        'Content-Type' : 'application/json'
                }
            }
        ).then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    dispatch(authActions.login(data))
                    nav('/home')        
                    console.log(data,'Sign In Successfull')})
            }else{
                alert('Invalid data !!! please try again')
            }
        })
    }

    return <div className="container">
            <h2>{isLogged ? "Sign Up Form" : 'Sign In Form'}</h2>
            <form onSubmit={signupHandler} className="signup-form">
                <label>Email Id</label>
                <input type="email" ref={email}></input><br/>
                <label>Password</label>
                <input type="password" ref={password}></input><br/>
                {isLogged && <label>Confirm Password</label>}
                {isLogged && <input type="password" ref={confirmPassword}></input>}<br/>
                {!isLogged && <Link to='/passwordreset'>Forgot Password</Link>}
                {isLogged && <button type="Submit" >Sign Up</button>}
                {!isLogged &&<button type="Submit" >Sign In</button>}
            </form>
            <br/><br/><br/>
            <button onClick={switchHandler} className='additional'>{isLogged ? 'Already Registered!!! Sign In' : "Don't have an account? Sign Up" }</button>
    </div>
}

export default Signup