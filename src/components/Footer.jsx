import React from 'react'
import Newsletter from './Newsletter'

export const Footer = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-1 lg:grid-cols-1'>
            <h2 className='mb-6'>Subscribe to Our Newsletter</h2>
            <Newsletter />
            <div className='grid lg:grid-cols-4 gap-4 mt-16'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 content-start'>
                        <div className="flex flex-col">
                            <div className='w-[72px] h-[72px] rounded-full bg-gray-400 mr-96 ml-[10px]'>
                                {/* this is an empty div to create a circle */}
                            </div>
                            <div className='p-[10px] text-left text-base w-[300px] h-[200px] text-black'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in metus vel elit luctus luctus nec in arcu. Aliquam porttitor, sapien id hendrerit vestibulum, risus nulla accumsan libero, et convallis arcu nisl vitae justo. Etiam vel metus et mauris iaculis iaculis. Integer ut cursus ex.
                            </div>
                        </div>
                    </div>
                    <ul className='flex flex-col align-middle m-6'>
                        <span className='p-1 font-semibold text-2xl'>Useful Links</span>
                        <a href="#!" className='mt-9 mb-3 inline-block'>
                            <li className='text-secondary-color text-base'>
                                Lorem, ipsum...
                            </li>
                        </a>
                        <a href="#!" className='mt-9 mb-3 inline-block'>
                            <li className='text-secondary-color text-base'>
                                Lorem, ipsum...
                            </li>
                        </a>
                        <a href="#!" className='mt-9 mb-3 inline-block'>
                            <li className='text-secondary-color text-base'>
                                Lorem, ipsum...
                            </li>
                        </a>
                    </ul>
            </div>
        </div>
    )
}