import React, { useState } from 'react';
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const Uploadbook = () => {
  const BookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Thriller",
    "Romance",
    "Historical",
    "Biography",
    "Self-Help",
    "Children's",
    "Young Adult",
    "Graphic Novels",
    "Comics",
    "Poetry",
    "Drama",
    "Classics",
    "Adventure",
    "Horror",
    "Cooking",
    "Art",
    "Travel",
    "Science",
    "Technology",
    "Health",
    "History",
    "Philosophy",
    "Religion",
    "Education",
    "Business",
    "Law",
    "Music",
    "Sports",
    "Politics",
    "Psychology",
    "Spirituality",
    "True Crime",
    "Parenting",
    "Humor",
  ];

  const [selectedBookCategories, setSelectedCategorie] = useState(BookCategories[0]);
  
  const handleChangeSelectedValue = (event) => {
    setSelectedCategorie(event.target.value);
  }

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = selectedBookCategories;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName,imageURL , category, bookDescription, bookPDFURL
    };

    console.log(bookObj);

    // send data to db
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book Uploaded Successfully!");
    })
    .catch(error => {
      console.error("Error uploading book:", error);
      alert("Failed to upload book.");
    });
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload Book</h2>

      <form className="lg:w-[1180px] flex flex-col gap-4" onSubmit={handleBookSubmit}>
        {/* First Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* title */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="bookTitle" value="Book Title" className='text-xl'/>
            </div>
            <TextInput id="bookTitle" type="text" name='bookTitle' placeholder='Book Name' required/>
          </div>

          {/* author */}  
          <div>
            <div className="mb-3 block">
              <Label htmlFor="authorName" value="Author Name" className='text-xl'/>
            </div>
            <TextInput id="authorName" type="text" name='authorName' placeholder='Author Name' required  />
          </div>
        </div>

        {/* Second Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* imageUrl */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="imageURL" value="Book Image Url" className='text-xl'/>
            </div>
            <TextInput id="imageURL" type="text" name='imageURL' placeholder='Book Image Url' required  />
          </div>

          {/* Category */}  
          <div>
            <div className="mb-3 block">
              <Label htmlFor="inputState" value="Book Category" className='text-xl'/>
            </div>
            <select id='inputState' name='category' className='w-full rounded' value={selectedBookCategories} onChange={handleChangeSelectedValue}>
              {BookCategories.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Third Row */}
        <div>
          {/* Description */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="bookDescription" value="Book Description" className='text-xl'/>
            </div>
            <Textarea id="bookDescription" type="text" name='description' placeholder='Write Your Book Description' required rows={6} />
          </div>
        </div>

        {/* Forth Row */}
        <div>
          {/* Pdf UrL */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" className='text-xl'/>
            </div>
            <TextInput id="bookPDFURL" type="text" name='pdfUrl' placeholder='Book PDF URL' required/>
          </div>
        </div>

        <button type='submit' className='bg-blue-400 w-full text-white font-semibold px-5 py-3 text-lg rounded hover:bg-black transition-all duration-300'>
          Upload Book
        </button>
      </form>
    </div>
  );
}

export default Uploadbook;