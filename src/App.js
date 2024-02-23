import React from 'react'
import Testimonials from './components/Testimonials'
import reviews from './data';
const App = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-200'>
          
      <div>
        
        <h1 className="text-4xl font-bold text-center mt-4 lg:mt-1">Our Testimonials</h1>
        
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        
        <Testimonials reviews={reviews}/>

      </div>

    </div>
  )
}

export default App