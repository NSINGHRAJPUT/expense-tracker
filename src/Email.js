import { useState } from 'react';
import './Email.css'
import { useNavigate } from 'react-router-dom';

const Email = () =>{
    const data = JSON.parse(localStorage.getItem('data'));
    const token = localStorage.getItem('token')
    const [state,setState] = useState('');
    const nav = useNavigate();

    const  emailHandler = (e) =>{
        e.preventDefault();
        console.log(data.email)
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
            localStorage.setItem('email', true)
            nav('/home')
        })
        .catch(err=>alert(err))
        
    }
    return <section>
        <label>{data.email}</label>
        <button onClick={emailHandler} >Verify</button>
        {state}
    </section>
}

export default Email;