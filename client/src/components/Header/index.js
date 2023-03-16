import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <Link to="">
            <h1>Address Book</h1> 
          </Link>
  
          <nav className="text-center">
            {Auth.loggedIn() ? (
              <>          <button
              type="button"
              className=""><a href="#_" className="">

              <span onClick={logout} className="btn btn-info">Click to Logout</span>

              </a>
            </button><br></br>

              </>
            ) : (
              <><button
              type="button"
              className=""><a href="#_" className="">
              <span className="btn btn-info"><Link to="/login">Login</Link></span>

              </a>
            </button>
            <button
              type="button"
              className=""><a href="#_" className="">

              <span className="btn btn-info"><Link to="/Signup">Sign Up</Link></span>

              </a>
            </button>
              </>
            )}
          </nav>
        </div>
      </header>
    )
}

export default Header;