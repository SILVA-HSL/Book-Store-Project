import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate,useParams } from 'react-router-dom'


const DeleteBooks = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleDeleteBook =() =>{
    setLoading(true);
    axios
    .delete(`http://localhost:3000/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      alert("An error happend. please check console");
      console.log(error);
    });
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/>: ''}
      <div className='flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <h3 className='text-xl text-gray-500'>Are you sure you want to delete this book?</h3>

        <button onClick={handleDeleteBook} className='p-4 bg-red-600 text-white m-8 w-full'>Yes, Delete it</button>

      </div>
    </div>
  )
}

export default DeleteBooks
