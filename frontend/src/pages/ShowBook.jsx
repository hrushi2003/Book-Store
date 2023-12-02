import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";


const ShowBook = () => {
  const [book,setBook] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`).then((response) => {
      setBook(response.data);
    }).catch((error)=> {
      console.log("Error",error);
    })
    .finally(()=>{
      setLoading(false);
    })
  }, []);
  return (
    <div className='p-8'>
      <BackButton />
      {loading ? (
        <Spinner />
      ):(
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-5 mt-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Published Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Created At</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Updated At</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
          </div>
      )}
      
    </div>
  )
}

export default ShowBook