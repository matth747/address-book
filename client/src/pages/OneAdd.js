import React from 'react';
import { Link } from 'react-router-dom';
import EditForm from '../components/EditForm'
import DeleteButton from '../components/DeleteButton'

import SingleAdd from '../components/SingleAdd';

const OneAdd = () => {

        return (
            <main className='container'>
            <EditForm/>
            <SingleAdd/>
            <DeleteButton/>
            </main>
            )
        }
        export default OneAdd;
        