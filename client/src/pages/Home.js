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
    <main>
        <AddForm/>
        <AddList
        addresses={me.addresses}/>
    </main>
  );
};

export default Home;
