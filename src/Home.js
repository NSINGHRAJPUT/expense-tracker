import { Link } from 'react-router-dom';
import './Home.css'
const Home = () =>{
    const data = JSON.parse(localStorage.getItem('data'));
    const email = localStorage.getItem('email');
    return <div className='home'>
        <h4>Welcome to the Expense Tracker app</h4>
        {!data && <h5>Your Profile is Incomplete. <Link to='/updateprofile'>Complete Now</Link></h5>}
        {data && <section className='profile'>
        <img src={`${data.photoUrl}`} alt='' />
        <h2>Name :- {data.displayName} </h2>
        <h2>Email Id :- {data.email} </h2>
        {!email && <Link to= '/email'>your Email id is not verified please verify</Link>}
        <br></br>
        <Link to='/updateProfile'>Edit Profile Details</Link>
    </section>}
    </div>
}

export default Home;