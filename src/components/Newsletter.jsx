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
      <form>
        <input type="text" name="Email" value={inputValue} onChange={handleChange} placeholder="Your Email Address"/>
        <button type="submit">
          <input type="submit" value="Submit" />
        </button>
      </form>
    </>
  )
}

export default Newsletter