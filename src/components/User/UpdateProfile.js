import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/authentication';

const UpdateProfile = () =>{
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch();
    const name = useRef();
    const url = useRef();
    const nav = useNavigate();

    const profileHandler = (e) =>{
        e.preventDefault();
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
        .then(data=>{
            dispatch(authActions.update(data))
            nav('/home')
        })
        .catch(err=>alert(err))
    }
    return <div className='container'>
        <form onSubmit={profileHandler} className='signup-form'>
            <label>Full Name</label>
            <input type='text' ref={name}></input><br/>
            <label>Profile Photo URL</label>
            <input type='text' ref={url}></input><br/><br/>
            <button type='submit'>Submit Details</button>
        </form>
    </div>
}

export default UpdateProfile;