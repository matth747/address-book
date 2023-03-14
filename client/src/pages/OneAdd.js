import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditForm from '../components/EditForm'
import DeleteButton from '../components/DeleteButton'

import { QUERY_ADD } from '../utils/queries';

const OneAdd = () => {
    const { addId } = useParams();
    const { loading, data } = useQuery(QUERY_ADD,
        {variables: {id: addId}}
        );
        const add = data?.address || {};
        console.log(data)
        
        return (
            <main>
            <EditForm/>
            <ul>
            <li>{add.name}</li>
            <li>{add.streetAddress}</li>
            <li>{add.cityState}</li>
            <li>{add.zipCode}</li>
            <li>{add.notes}</li>
            <li>{add.phone}</li>
            
            </ul>
            <DeleteButton/>
            </main>
            )
        }
        export default OneAdd;
        