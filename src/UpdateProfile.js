import { useRef } from 'react';
import './UpdateProfile.css'

const UpdateProfile = () =>{
    const name = useRef();
    const url = useRef();

    const profileHandler = (e) =>{
        e.preventDefault();
        const token=localStorage.getItem('token')
        console.log(name.current.value,url.current.value)
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB6twBfYeAK7PmDAUWyQUGA-ph0S-Qjnq4',
        {
            method: 'POST',
            body : JSON.stringify({
                idToken:token,
                displayName: name.current.value,
                photoUrl : url.current.value,
                returnSecureToken : false
            }),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>alert(err))
    }

    return <section>
        <form onSubmit={profileHandler}>
            <label>Full Name</label>
            <input type='text' ref={name}></input>
            <label>Profile Photo URL</label>
            <input type='text' ref={url}></input><br/><br/>
            <button type='submit'>Submit Details</button>
        </form>
    </section>
}

export default UpdateProfile;