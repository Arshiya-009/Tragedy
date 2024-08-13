import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import SearchBox from '../components/home/SearchBox';
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [showType, setShowType] = useState('table');
  const title = searchParams.get("q");
  const author = searchParams.get("p");
  const genre = searchParams.get("genre");

  useEffect(() => {
    let url  = 'http://localhost:5555/books';
    if(title){
      url = `http://localhost:5555/books?title=${title}&author=${author}`;
    }
    if(genre){
      url = `http://localhost:5555/books?genre=${genre}`;
    }
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (

    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button 
          className=' mahdyiarbtn bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='mahdyiarbtn bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>

        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
        <div class="dropdown">
<button class="dropbtn">Dropdown</button>
<div class="dropdown-content">
<a href="?">All</a>

<a href="?genre=Romantic">Romantic</a>
        <a href="?genre=Classical">Classical</a>
        <a href="?genre=Horror">Horror</a>
        <a href="?genre=Drama">Drama</a>
        <a href="?genre=Crime">Crime</a>
        <a href="?genre=Comedy">Comedy</a>
        <a href="?genre=Comic">Comic</a>
        <a href="?genre=Adventure">Adventure</a>
        <a href="?genre=Tragedy">Tragedy</a>
        <a href="?genre=Puzzle">Puzzle</a>
</div>
</div>

      </div>
      <SearchBox></SearchBox>
      {/* <div className='flex justify-center items-center gap-x-4'> */}

{/* </div> */}


      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
