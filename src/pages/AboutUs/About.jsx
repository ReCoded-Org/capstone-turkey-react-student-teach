import React from 'react'
import Card from '../../components/Card'
import creators from '../../components/creators'

function About() {
 
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12'>
         <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 text-center">
            About
          </h1>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
          {
              creators.map((creator)=>(
                  <Card key={creator.id} name={creator.name} title={creator.title} email={creator.email} photo={creator.photo}/>
              ))
          }
         </div>
    </div>
  )
}

export default About