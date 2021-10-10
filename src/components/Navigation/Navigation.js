import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Navigation = () => (
    <header>
        <nav>
            <div className="left">
                <NavLink exact to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
            </div>
            <div className="right">
                <NavLink exact to="/help">Help <i className="far fa-question-circle"></i></NavLink>
            </div>
        </nav>
    </header>
);

export default Navigation;