import React from 'react';


import Auth from '../utils/auth';


const Home = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <p>this p tag represents the home page</p>
    </main>
  );
};

export default Home;
