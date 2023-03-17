import React from 'react';
import { Link } from 'react-router-dom';


const AddList = ({addresses}) => {


    return (
        <div className='row'>
            <h3 className='col-12'>
                Contacts
            </h3>
            {addresses && addresses.map((address) => (


                <div className='card col-12 col-md-6' key={address._id}>
                    <div className='card-body'>
                    <h3 className='card-header' key={address.name}>{address.name}</h3>
                    <h5 key={address.streetAddress}>{address.streetAddress}</h5>
                    <h5 key={address.cityState}>{address.cityState}</h5>
                    <h5 key={address.zipCode}>{address.zipCode}</h5>
                    <h5 key={address.notes}>{address.notes}</h5>
                    <h5 key={address.phone}>{address.phone}</h5>
                    <h5 key={address._id}><Link to={`adds/${address._id}`}>Edit/Delete</Link></h5>
                </div>
                </div>

                
            ))}
        </div>
    )
}

export default AddList