'use client'

import React from 'react'
import "./component.css"

const GenerateBtn = () => {

    function generateFile(){
        const file = new File(["foo"], "foo.txt", {
            type: "text/plain",
        });
        console.log(file);
    }

  return (
    <button className='genBtn' onClick={generateFile}>Generate</button>
  )
}

export default GenerateBtn