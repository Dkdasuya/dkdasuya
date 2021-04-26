import react from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Navbar = ()=>{
    return(
        <>
        <div className = "container-fluid nav_bg">
            <div className='row'>
                <div className='col-10 mx-auto'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <NavLink   to='/'  className="navbar-brand" href="#">Dheeraj Kapoor</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav rightAlign ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="icons" target="_blank" href="https://www.linkedin.com/in/dheeraj-kapoor/"><LinkedInIcon fontSize="large"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="icons" target="_blank" href="https://github.com/Dkdasuya"><GitHubIcon fontSize="large"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="icons" target="_blank" href="https://www.instagram.com/dkapoor_7701/"><InstagramIcon fontSize="large"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="icons" target="_blank" href="https://twitter.com/Dheeraj08711288"><TwitterIcon fontSize="large"/></a>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink exact  activeClassName='active_class' to='/' className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='active_class' to='/services' className="nav-link" href="#projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='active_class' to='/contact' className="nav-link" href="#">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='active_class' to='/about' className="nav-link" href="#">About</NavLink>
                            </li> */}
                        </ul>
                        </div>
                    </div>
                    </nav>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;