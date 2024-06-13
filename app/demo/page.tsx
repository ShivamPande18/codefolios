"use client"

import React from 'react'
import "./demo.css"
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import devMain from "/public/devMain.png"

const DemoPage = () => {

    const searchPrms = useSearchParams();

  return (
    <main>
        <section className="introSec" id="mainId">
            <div className="introCont">
                <div className="introInfo">
                    <div className="introTitle">Hey there, <br/> Shivam <span className="introLogo">{"</Pande>"}</span> here👋</div>
                    <div className="introAbout">Full Stack Developer 🖥️, ML Enthusiast 🤖</div>
                    <div className="introBtns">
                        <a href="https://docs.google.com/document/d/1N4cALNCwCYUk_Mw0NSFeap1S1AWhA0TVdg1tc2PNjqQ/edit?usp=sharing   " target="_blank"><button>RESUME 🗒️</button></a>
                    </div>
                </div>
                <div className="devPic">
                    <Image className='devImg'
                        src={devMain}
                        width={0}
                        height={0}
                        alt='Intro Image'
                    ></Image>
                </div>
            </div>
        </section>
    </main>
  )
}

export default DemoPage