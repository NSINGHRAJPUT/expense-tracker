import { useRef } from 'react';

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

    return <div className='container'>
    <form className='signup-form' onSubmit={passwordHandler}>
        <label>Enter Email Id</label>
        <input type='email' ref={email}></input><br/>
        <button>Reset Password</button>
        {}
    </form>
    </div>
}

export default PasswordReset;