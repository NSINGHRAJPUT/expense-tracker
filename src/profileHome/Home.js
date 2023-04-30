import { Link } from 'react-router-dom';
import './Home.css'
import {  useSelector } from "react-redux";


const Home = () =>{
    const profileName = useSelector(state=>state.auth.profileName)
    const profileUrl = useSelector(state=>state.auth.url)
    const profileEmail = useSelector(state=>state.auth.email)
   
    return <div className='home'>
        <h4>Welcome to the Expense Tracker app</h4>
        {!profileName && <h5>Your Profile is Incomplete. <Link to='/updateprofile'>Complete Now</Link></h5>}
        {profileName && <section className='profile'>
        <img src={`${profileUrl}`} alt='' />
        <h2>Name :- {profileName} </h2>
        <h2>Email Id :- {profileEmail} </h2>
        {!profileEmail && <Link to= '/email'>your Email id is not verified please verify</Link>}
        <br></br>
        <Link to='/updateProfile'>Edit Profile Details</Link>
    </section>}
    </div>
}

export default Home;