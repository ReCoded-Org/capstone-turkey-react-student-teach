import PropTypes from 'prop-types';

import githubLogo from '../assets/images/github-logo.png';
import linkedinLogo from '../assets/images/linkedin-logo.png';

function Card( { name, title, email, photo } ) {

    return (
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <img
                    src={photo} 
                    alt="profilePicture"
                    className='w-10 h-10'
                />
                <div className="p-5 bg-card-background">
                    <p className="mb-3 font-normal text-[#424242] dark:text-gray-400">Name: 
                        {name}
                    </p>
                    <p className="mb-3 font-normal text-[#424242] dark:text-gray-400">Title: {title}</p>
                    <p className="mb-3 font-normal text-[#424242] dark:text-gray-400">Email Address: {email}</p>
                    <div className="flex flex-row justify-start">
                        <a href="contact.github" className='mr-4'>
                            <img src={githubLogo} alt="logo of github" height={24} width={24}/>
                        </a> 
                        <a href="contact.linkedin" className='ml-4'>
                            <img src={linkedinLogo} alt="logo of linkedin" height={24} width={24}/>
                        </a>
                    </div>
                </div>
            </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    photo: PropTypes.string,
};

export default Card;