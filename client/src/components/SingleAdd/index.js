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
        <div className="row mt-3">
        <div className='card col-12 '>
        <div className='card-body'>
        <h3 key={add.name}>{add.name}</h3>
        <h5 key={add.streetAddress}>{add.streetAddress}</h5>
        <h5 key={add.cityState}>{add.cityState}</h5>
        <h5 key={add.zipCode}>{add.zipCode}</h5>
        <h5 key={add.notes}>{add.notes}</h5>
        <h5 key={add.phone}>{add.phone}</h5>
        </div>
        </div>



        </div>
    )
}

export default SingleAdd;