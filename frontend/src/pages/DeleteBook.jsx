import React,{useState,useEffect} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteBook = () => {
  const navigate = useNavigate();
  const {id} = useParams();
 const deleteBook = () => {
    axios.delete(`http://localhost:3000/books/${id}`).then(() => {
      alert('book deleted from the database');
      navigate('/');
    }).catch((error) => {
      console.log(error);
       alert('book cant be deleted');
       navigate('/');
    })
 }
  return (
    <div className='flex flex-col w-[100px] h-[100px] border border-sky-400 rounded-lg'>
      <h1>Do You want to delete this data from the database</h1>
      <button className='' onClick={deleteBook}>Delete</button>
    </div>
  )
}

export default DeleteBook