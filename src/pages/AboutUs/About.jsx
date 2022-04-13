import React from 'react'
import Card from '../../components/Card'
import creators from '../../components/creators'

function About() {
 
  return (
    <div>
         <h1>About</h1>
        {
            creators.map((creator)=>(
                <Card key={creator.id} name={creator.name} title={creator.title} email={creator.email} photo={creator.photo}/>
            ))
        }
    </div>
  )
}

export default About