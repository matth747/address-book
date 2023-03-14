import React, { useState } from 'react';
import Auth from '../../utils/auth'
import { useParams } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { EDIT_ADD } from '../../utils/mutations';

const EditForm = () => {
  const { addId } = useParams();

    const [editState, setEditState] = useState({
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
  const [editAdd, { error }] = useMutation(EDIT_ADD)

  // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;
    setEditState({
        ...editState,
        [name]: value,
    })
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(editState)
    try {
      await editAdd({
            
        variables: { addId, ...editState },
      });
    window.location.reload()

      // clear form value
      setEditState('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">EDIT_ADD</h4>
          <div className="card-body">
            <form>
                <input
                className="form-input"
                placeholder="Enter Name"
                name="name"
                type="name"
                id="name"
                value={editState.name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Enter the street address"
                name="streetAddress"
                type="streetAddress"
                id="streetAddress"
                value={editState.streetAddress}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Enter city, State"
                name="cityState"
                type="cityState"
                id="cityState"
                value={editState.cityState}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Enter Zip"
                name="zipCode"
                type="zipCode"
                id="zipCode"
                value={editState.zipCode}
                onChange={handleChange}
              />

                <input
                className="form-input"
                placeholder="Enter notes"
                name="notes"
                type="notes"
                id="notes"
                value={editState.notes}
                onChange={handleChange}
              />
                <input
                className="form-input"
                placeholder="Enter phone"
                name="phone"
                type="phone"
                id="phone"
                value={editState.phone}
                onChange={handleChange}
              />
           <div className
            ="flex flex-col justify-center items-center">
            <button onClick={handleFormSubmit}>
            <span className="relative text-white">Click to add Address</span>
            </button>
            </div>
            </form>

            {error && <div className='text-center'>😕Address entry failed😕</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditForm;
