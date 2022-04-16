import React from 'react';
import { useState } from 'react';

const Newsletter = () => {

  const [inputValue, setInputValue] =  useState("");

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value)
    e.preventDefault();
  }

  return (
    <>
      <form className='block flex-col justify-items-center align-middle content-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>

        <input 
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Your Email Address"
          className="block w-[312px] h-auto text-base font-semibold transition ease-in-out outline outline-1 outline-secondary-color rounded-md text-font-color px-2 py-2 mb-3 text-center justify-center border-secondary-color"
        />

        <a href="#" className="inline-flex items-center justify-center w-[468px]">
          <button
            type="submit"
            className="block w-[468px] h-auto text-base border border-transparent font-semibold text-white bg-primary-color hover:bg-white hover:text-primary-color hover:border-primary-color rounded-md px-5 py-3">
              Submit
          </button>
        </a>

      </form>
    </>
  )
}

export default Newsletter