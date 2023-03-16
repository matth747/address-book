import React from "react";
import { QUERY_ADD } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const SingleAdd = () => {

    const { addId } = useParams();
    const { loading, data } = useQuery(QUERY_ADD,
        {variables: {id: addId}}
        );
        const add = data?.address || {};
        console.log(data)
        
    return (
        <ul>
        <li key={add.name}>{add.name}</li>
        <li key={add.streetAddress}>{add.streetAddress}</li>
        <li key={add.cityState}>{add.cityState}</li>
        <li key={add.zipCode}>{add.zipCode}</li>
        <li key={add.notes}>{add.notes}</li>
        <li key={add.phone}>{add.phone}</li>
        
        </ul>
    )
}

export default SingleAdd;