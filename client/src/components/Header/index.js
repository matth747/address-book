import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <header className="">
        <div className="">
          <Link to="">
            <h1>Address Book</h1> 
          </Link>
  
          <nav className="text-center">
            {Auth.loggedIn() ? (
              <>          
              <button onClick={logout} className="btn btn-info">Click to Logout
            </button>
            <br></br>
            <hr></hr>
            </>
            ) : (
              <>
              <button className="btn btn-info"><Link to="/login">Login</Link>
            </button>

            <button className="btn btn-info"><Link to="/Signup">Sign Up</Link>
            </button>
              </>
            )}
          </nav>
        </div>
      </header>
    )
}

export default Header;