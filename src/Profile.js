import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = () =>{
    const data = JSON.parse(localStorage.getItem('data'));
    return <section className='profile'>
        <img src={`${data.photoUrl}`} alt='' />
        <h2>Name :- {data.displayName} </h2>
        <h2>Email Id :- {data.email}</h2>
        <Link to='/updateProfile'>Edit Profile Details</Link>
    </section>
}

export default Profile;