import React from 'react'
import { useState } from 'react';

const Newsletter = () => {

  const [inputValue, setInputValue] =  useState("");

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <>
      <form>
        <input type="text" name="" value={inputValue} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Newsletter