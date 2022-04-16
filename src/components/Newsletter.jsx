import React from 'react'
import { useState } from 'react';

const Newsletter = () => {

  const [inputValue, setInputValue] =  useState("");

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value)
    e.preventDefault();
  }

  return (
    <>
      <form className='flex flex-cols'>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Your Email Address" className='block w-full text-base font-normal transition ease-in-out m-0 color-[secondary] rounded border-secondary'/>
        <br/>
        <button type="submit" className='block w-full text-base font-normal'>
          Submit
        </button>
      </form>
    </>
  )
}

export default Newsletter