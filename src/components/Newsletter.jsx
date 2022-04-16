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
        
      </form>
    </>
  )
}

export default Newsletter