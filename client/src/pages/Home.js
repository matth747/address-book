import React from 'react';
import { useQuery } from '@apollo/client';

import AddForm from '../components/AddForm'
import AddList from '../components/AddList';

import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main className='container'>
        {Auth.loggedIn() ? (
          <>
        <AddForm/>
        <AddList
        addresses={me.addresses}/>
        </>
        ) : (
          <h3>Please log in to save addresses!</h3>
        )}
    </main>
  );
};

export default Home;
