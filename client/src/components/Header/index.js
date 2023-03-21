import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    return (
      <div className='headfoot mb-3'>

        <header className="container">
        <div className="row">
          <Link to="">
            <h1 className='m-3'>Address Book</h1> 
          </Link>
  
          <nav className="text-center mb-3">
            {Auth.loggedIn() ? (
              <>          
              <button onClick={logout} className="btn btn-info">Click to Logout
            </button>

            </>
            ) : (
              <>
              <button className="btn btn-info mx-1 blk_text"><Link to="/login">Login</Link>
            </button>

            <button className="btn btn-info mx-1 blk_text"><Link to="/Signup">Sign Up</Link>
            </button>

              </>
              
            )}
          </nav>
        </div>
      </header>

        </div>
    )
}

export default Header;