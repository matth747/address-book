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
            <h1 className='m-5'>Address Book</h1> 
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
              <button className="btn btn-info mx-1"><Link to="/login">Login</Link>
            </button>

            <button className="btn btn-info mx-1"><Link to="/Signup">Sign Up</Link>
            </button>
            <br></br>
            <hr></hr>
              </>
              
            )}
          </nav>
        </div>
      </header>
    )
}

export default Header;