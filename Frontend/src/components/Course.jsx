import React, { useEffect, useState } from 'react'
import Cards from './cards'
// import list from '../../public/list.json'
import axios from "axios"
import { Link } from 'react-router-dom'

function Course() {
    const [book,setBook]=useState([]);
    useEffect(()=>{
        const getBook=async()=>{
            try
            {
              const res = await axios.get("http://localhost:4001/book");
              console.log(res.data);
              setBook(res.data);
            }
            catch(error)
            {
                console.log(error);
            }
        }
        getBook();
    },[]);
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
            <div className="mt-28 items-center text-center">
                <h1 className="text-2xl md-text-4xl ">We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
                <p className="mt-12">Thank you for joining our community of book lovers and exploring our collection of free reads. 
                    We hope you've enjoyed the journey so far. Now, we're excited to introduce you to our premium library,
                    where you'll find a carefully curated selection of books that promise even more captivating stories and unforgettable experiences.
                     Dive into these exclusive titles and discover your next great read!
                </p>
                <Link to="/">
                    <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                        Back
                    </button>
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                {
                    book.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course