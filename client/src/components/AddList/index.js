import React from 'react';
import { Link } from 'react-router-dom';


const AddList = ({addresses}) => {


    return (
        <div>
            <h4>
                Addresses
            </h4>
            {addresses && addresses.map((address) => (


                <ul>
                    <li>{console.log(address)}</li>
                    <li>{address.name}</li>
                    <li>{address.streetAddress}</li>
                    <li>{address.cityState}</li>
                    <li>{address.zipCode}</li>
                    <li>{address.notes}</li>
                    <li>{address.phone}</li>
                    <li><Link to={`adds/${address._id}`}>Edit</Link></li>
                </ul>
                
            ))}
        </div>
    )
}

export default AddList