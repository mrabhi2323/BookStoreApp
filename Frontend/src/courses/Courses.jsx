import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
    // console.log(list);
  return (
    <>
        <div className="">
        <Navbar/>
        <div className="min-h-screen">
            <Course/>
        </div>
        <Footer/>
        </div>
    </>
  )
}

export default Courses