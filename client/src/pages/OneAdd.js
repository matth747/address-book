import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


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
                <ul>
                    <li>{add.name}</li>
                    <li>{add.streetAddress}</li>
                    <li>{add.cityState}</li>
                    <li>{add.zipCode}</li>
                    <li>{add.notes}</li>
                    <li>{add.phone}</li>
                    <li><Link to={""}>Edit</Link></li>
                </ul>
    </main>
)
}
export default OneAdd;
