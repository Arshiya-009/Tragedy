import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const SearchBox = ({  }) => {
  return (
    <div>
        <form class='search-form' id="form">
     <input type="search" id="query" name="q" placeholder="Search..." class='search-input'></input>
     <button>Search</button>
     </form>
    </div>
  );
};

export default SearchBox;
