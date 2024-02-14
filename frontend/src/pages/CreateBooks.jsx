import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateBooks = () => {
  const navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishYear] = useState();
  const [loading,setLoading] = useState(false);
  const handleSave = () => {
    if (publishYear != Number){
      alert("please enter valid format");
    }
    else{
    setLoading(true);
    const data = {
      title,
      author,
      publishYear
    }
    axios.post('http://localhost:3000/books',data).then((response) =>{
      console.log(response.data);
        alert("Data Saved Successfully");
        setLoading(false);
        navigate('/');
    }).catch((error) => {
      console.log(error);
      alert("Error while saving the data");
      navigate('/');
      setLoading(false);
    })
  }
  }
  return (
    <div className='p-4'>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 m-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          >
          </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input 
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          >
          </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input 
          type='text'
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          >
          </input>
        </div>
        <div className='my-4'>
          <button className='w-80 h-10 rounded-lg bg-sky-300 m-8' onClick={handleSave}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CreateBooks
