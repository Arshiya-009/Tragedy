import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, Navigate } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import SearchBox from '../components/home/SearchBox';
import { useSearchParams } from "react-router-dom";

const Landing = () => {
  return (
    <Navigate to="/index.html" replace={true} />
  );
};

export default Landing;
