import React from 'react';
import { Link } from 'react-router-dom';


const AddList = ({addresses}) => {


    return (
        <div>
            <h4>
                Addresses
            </h4>
            {addresses && addresses.map((address) => (


                <ul key={address._id}>
                    <li key={address.name}>{address.name}</li>
                    <li key={address.streetAddress}>{address.streetAddress}</li>
                    <li key={address.cityState}>{address.cityState}</li>
                    <li key={address.zipCode}>{address.zipCode}</li>
                    <li key={address.notes}>{address.notes}</li>
                    <li key={address.phone}>{address.phone}</li>
                    <li key={address._id}><Link to={`adds/${address._id}`}>Edit</Link></li>
                </ul>
                
            ))}
        </div>
    )
}

export default AddList