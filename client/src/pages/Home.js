import React from 'react';
import AddForm from '../components/AddForm'


import Auth from '../utils/auth';


const Home = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <AddForm/>
    </main>
  );
};

export default Home;
