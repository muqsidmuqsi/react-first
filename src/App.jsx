import React from 'react'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import HomeCards from "./Component/HomeCards"
import JobListing from './Component/JobListing';

const App = () => {
  return (
 <>
    <Navbar/>
    <Hero/>
   <HomeCards/>
   <JobListing/>
  

  
    

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>

</>)
}
export default App;
