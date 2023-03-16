import React from 'react';
import { useMutation } from '@apollo/client';

import { useParams } from 'react-router-dom';

import { REMOVE_ADD } from '../../utils/mutations';
const DeleteButton = () => {
    const { addId } = useParams();

    const [deleteAdd, {error}] = useMutation(REMOVE_ADD)
    const deleteHandler = async (event) => {
        event.preventDefault();
    
        try{
          await deleteAdd({
            variables: { addId }
          });
          window.location.reload()
    
        }  catch (e) {
          console.error(e);
        }
      }
    return (

        <button className='btn btn-danger' onClick={deleteHandler}>
        Delete
        </button>

    )
}

export default DeleteButton;