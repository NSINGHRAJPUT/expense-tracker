import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/authentication';

const Email = () =>{
    const email = useSelector(state=>state.auth.email)
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch();
    const [state,setState] = useState('');
    const nav = useNavigate();

    const  emailHandler = (e) =>{
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4',
        {
            method: 'POST',
            body : JSON.stringify({
                requestType : 'VERIFY_EMAIL',
                idToken : token
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(res=>res.json())
        .then(data=>{
            setState(' you might have recieved a verification link . Click on it to verify');
            console.log(data)
            dispatch(authActions.varify())
            nav('/home')
        })
        .catch(err=>alert(err))
    }
    return <section>
        <label>{email}</label>
        <button onClick={emailHandler}>Verify</button>
        {state}
    </section>
}

export default Email;