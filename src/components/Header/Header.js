import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () =>{
    const nav = useNavigate();
    const token = localStorage.getItem('token');
    const logoutHandler = (e) =>{
        e.preventDefault();
        localStorage.clear();
        nav('/')
    }

    return <div>
    <header className='header'>
        <h2>Expense Tracker </h2>
        {!token && <Link to='/'>Sign In</Link>}
        {token &&<button onClick={logoutHandler}>LogOut</button>}
    </header>
    <section><Outlet/></section>
    </div>
}

export default Header