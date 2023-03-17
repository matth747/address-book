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
    <div className="row">

        <div className="card col-12">
          <h4 className="card-header">Edit Address</h4>
          <div className="card-body">
            <form>
                <input
                className="form-input mx-1"
                placeholder="Enter Name"
                name="name"
                type="name"
                id="name"
                value={editState.name}
                onChange={handleChange}
              />
              <input
                className="form-input mx-1"
                placeholder="Enter the street address"
                name="streetAddress"
                type="streetAddress"
                id="streetAddress"
                value={editState.streetAddress}
                onChange={handleChange}
              />
              <input
                className="form-input mx-1"
                placeholder="Enter city, State"
                name="cityState"
                type="cityState"
                id="cityState"
                value={editState.cityState}
                onChange={handleChange}
              />
              <input
                className="form-input mx-1"
                placeholder="Enter Zip"
                name="zipCode"
                type="zipCode"
                id="zipCode"
                value={editState.zipCode}
                onChange={handleChange}
              />

                <input
                className="form-input mx-1"
                placeholder="Enter notes"
                name="notes"
                type="notes"
                id="notes"
                value={editState.notes}
                onChange={handleChange}
              />
                <input
                className="form-input mx-1"
                placeholder="Enter phone"
                name="phone"
                type="phone"
                id="phone"
                value={editState.phone}
                onChange={handleChange}
              />

            </form>
            <button className="btn btn-primary mt-3" onClick={handleFormSubmit}>
            Click to Edit Address
            </button>
            {error && <div className='text-center'>😕Address entry failed😕</div>}
          </div>
      </div>
    </div>
  );
};

export default EditForm;
