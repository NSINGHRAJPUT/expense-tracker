import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authentication';

const Header = () =>{
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch()
    const nav = useNavigate();
    
    const logoutHandler = (e) =>{
        e.preventDefault();
        dispatch(authActions.logout())
        nav('/')
    }
    return <div>
    <header className='header'>
        <h2>Expense Tracker App </h2>
        {!token && <Link to='/'>Sign In</Link>}
        {token &&<button onClick={logoutHandler}>LogOut</button>}
        {token && <Link to='/expense'>Expense app</Link>}
    </header>
    <section><Outlet/></section>
    </div>
}

export default Header