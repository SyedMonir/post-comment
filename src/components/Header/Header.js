import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../facebook.png';
import './Header.css';

const Header = () => {
    return (
        <header>
           <div>
               <Link to='home'> <img src={logo} alt="logo" className='logo' /> </Link> 
            </div> 
            <nav>
                <Link to='home'>Home</Link>
                {/* <Link to='news-feed'>NewsFeed</Link> */}
            </nav>
        </header>
    );
};

export default Header;