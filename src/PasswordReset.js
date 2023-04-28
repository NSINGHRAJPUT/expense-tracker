import { useRef } from 'react';
import './PasswordReset.css'

const PasswordReset = () =>{
    const email = useRef();

    const passwordHandler = (e) =>{
        e.preventDefault();
        console.log(email.current.value)
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4',
        {
            method : 'POST',
            body: JSON.stringify({
                requestType : 'PASSWORD_RESET',
                email : email.current.value
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>alert(err))
    }

    return <form className='password-form' onSubmit={passwordHandler}>
        <label>Enter Email Id</label>
        <input type='email' ref={email}></input><br/>
        <button>Reset Password</button>
        {}
    </form>
}

export default PasswordReset;