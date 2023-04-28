import { Link } from 'react-router-dom';
import './Home.css'
const Home = () =>{
    return <div className='home'>
        <h4>Welcome to the Expense Tracker app</h4>
        <h5>Your Profile is Incomplete. <Link to='/profile'>Complete Now</Link></h5>
    </div>
}

export default Home;