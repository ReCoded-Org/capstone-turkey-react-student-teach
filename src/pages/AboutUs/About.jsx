
import Card from '../../components/Card';
import creators from '../../components/creators';
import Divider from '../../components/Divider';

function About() {
  return (
    <div className='max-w-6xl md:container lg:container xl:container 2xl:container mx-auto px-2 md:px-2 lg:px-2 grid items-center'>

      <h1 className='font-medium text-2xl md:text-3xl lg:text-4xl mb-4 font-heading text-[color:var(--font-color)] text-center'>Team</h1>

      <Divider />

      <div className='grid sm:grid-cols-2 sm:gap-12 md:grid-cols-2 md:gap-12 mx-auto lg:grid-cols-3 lg:gap-12 xl:gap-18'>
        {
          creators.map((creator) => (
            <Card
              key={creator.id}
              name={creator.name}
              title={creator.title}
              email={creator.email}
              photo={creator.photo}
              github={creator.contact.github}
              linkedin={creator.contact.linkedin}
            />
          ))
        }
      </div>

    </div>
  )
}

export default About;