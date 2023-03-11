import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_ADD } from '../../utils/mutations';


const AddForm = () => {
  const [addState, setAddState] = useState({
    name: '',
    streetAddress: '',
    cityState: '',
    zipCode: '',
    notes: '',
    phone: '',

  });

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
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">ADD_ADD</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
                <input
                className="form-input"
                placeholder="Enter Name"
                name="name"
                type="name"
                id="name"
                value={addState.name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Enter the street address"
                name="streetAddress"
                type="streetAddress"
                id="streetAddress"
                value={addState.streetAddress}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Enter city, State"
                name="cityState"
                type="cityState"
                id="cityState"
                value={addState.cityState}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Enter Zip"
                name="zipCode"
                type="zipCode"
                id="zipCode"
                value={addState.zipCode}
                onChange={handleChange}
              />

                <input
                className="form-input"
                placeholder="Enter notes"
                name="notes"
                type="notes"
                id="notes"
                value={addState.notes}
                onChange={handleChange}
              />
                <input
                className="form-input"
                placeholder="Enter phone"
                name="phone"
                type="phone"
                id="phone"
                value={addState.phone}
                onChange={handleChange}
              />
           <div class ="flex flex-col justify-center items-center">
              <button className=" w-100" type="submit"
            ><a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute "></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Click to add Address</span>
            </span>
            </a>
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

export default AddForm;
