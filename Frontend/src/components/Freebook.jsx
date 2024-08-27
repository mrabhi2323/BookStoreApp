import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import axios from "axios"

import Cards from './cards';
function Freebook() {
  const [book,setBook]=useState([]);
    useEffect(()=>{
        const getBook=async()=>{
            try
            {
              const res = await axios.get("http://localhost:4001/book");
              console.log(res.data);
              const data=res.data.filter((data)=> data.category==="Free");
              console.log(data);
              setBook(data);
            }
            catch(error)
            {
                console.log(error);
            }
        }
        getBook();
    },[]);
    // const filterData= book.filter((data)=> data.category==="Free");
    // console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
            <h1 className="font-semi-bold text-xl pb-2">Free Offered Courses</h1>
            <p>Here are some Free books, endless adventures! Join us to explore new worlds and share your favorite reads.
            Dive into a world of stories—read for free! Join our book club and explore endless tales. Let’s turn the page together
            </p>
        </div>
    
    {/* Slider */}
        <div>
            <Slider {...settings}>
            {book.map((data) => (
                <Cards item={data} key={data.id} />
            ))}
            </Slider>
        </div>
    </div>
    </>
  )
}

export default Freebook