import React, { useState } from 'react';
import Auth from '../../utils/auth'


import { useMutation } from '@apollo/client';
import { ADD_ADD } from '../../utils/mutations';


const AddForm = () => {
  const [addState, setAddState] = useState({
    name: '',
    cityState: '',
    streetAddress: '',
    zipCode: '',
    notes: '',
    phone: '',
    
  });
  let username = "";
  const expired = Auth.isTokenExpired(Auth.getToken());
  if (!expired) {
    username = Auth.getUsername();
  }
  
  
  const [addAdd, { error }] = useMutation(ADD_ADD)
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddState({
      ...addState,
      [name]: value,
    })
    
  };
  
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addAdd({
        variables: { ...addState },
      });
      window.location.reload()
      
      // clear form value
      setAddState('');
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <div className="row mb-4">

    <div className="card col-12">
    <h4 className="card-header">Address Book</h4>
    <div className="card-body">
    <form>
    <input
    className="form-input mx-1"
    placeholder="Enter Name"
    name="name"
    type="name"
    id="name"
    value={addState.name}
    onChange={handleChange}
    />
    <input
    className="form-input mx-1"
    placeholder="Enter the street address"
    name="streetAddress"
    type="streetAddress"
    id="streetAddress"
    value={addState.streetAddress}
    onChange={handleChange}
    />
    <input
    className="form-input mx-1"
    placeholder="Enter City, State"
    name="cityState"
    type="cityState"
    id="cityState"
    value={addState.cityState}
    onChange={handleChange}
    />
    <input
    className="form-input mx-1"
    placeholder="Enter Zip"
    name="zipCode"
    type="zipCode"
    id="zipCode"
    value={addState.zipCode}
    onChange={handleChange}
    />
    
    <input
    className="form-input mx-1"
    placeholder="Enter notes"
    name="notes"
    type="notes"
    id="notes"
    value={addState.notes}
    onChange={handleChange}
    />
    <input
    className="form-input mx-1"
    placeholder="Enter phone"
    name="phone"
    type="phone"
    id="phone"
    value={addState.phone}
    onChange={handleChange}
    />
    

    
    </form>
    <button className="btn btn-success mt-3" onClick={handleFormSubmit}>
    Click to add Address
    </button>
    {error && <div className='text-center'>😕Address entry failed😕</div>}
    </div>

    </div>
    </div>
    );
  };
  
  export default AddForm;
  