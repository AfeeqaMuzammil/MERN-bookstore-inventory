import React, { useEffect, useState } from 'react';
import Bookcard from '../components/BookCards';

const Otherbook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/all-books")
        .then(res => res.json())
        .then(data => setBooks(data)) 
    }, []);
  
    return (
      <div>
        <Bookcard books={books} headline="Other Books" />
      </div>
    );
  };
export default Otherbook