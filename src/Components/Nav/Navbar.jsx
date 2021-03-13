import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
        <div>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div>
            <NavLink to="/news">News</NavLink>
        </div>
        <div>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;