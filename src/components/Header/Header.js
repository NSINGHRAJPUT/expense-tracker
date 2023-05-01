import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authentication';
import { useState } from 'react';
import ReactSwitch from 'react-switch';

const Header = () =>{
    const token = useSelector(state=>state.auth.token)
    const premium = useSelector(state=>state.expense.premium)
    const dispatch = useDispatch()
    const nav = useNavigate();
    const [checked, setChecked] = useState(true);

    const handleChange = val => {
        setChecked(val)
    }

    const logoutHandler = (e) =>{
        e.preventDefault();
        dispatch(authActions.logout())
        nav('/')
    }
    return <div>
    <header className='header'>
        <h2>Expense Tracker App </h2>
        {!token && <Link to='/' className='signin'>Sign In</Link>}
        {token &&<button onClick={logoutHandler}>LogOut</button>}
        {token && <Link to='/expense'>Expense app</Link>}
        {premium && <div className="app" style={{textAlign: "center"}}>
        <h4>Change Theme</h4>
        <ReactSwitch
          checked={checked}
          onChange={handleChange}
        />
      </div>}
    </header>
    <section><Outlet/></section>
    </div>
}

export default Header