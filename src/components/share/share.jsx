import React from 'react'

import "./share.css"

export default function share() {
  return (
    <div className='share'>
      <div className='sharewrapper'>
        <div className='shareTop'>
            <img className='shareProfileImg' src='/asserts/1.jpg' alt='' />
            <input placeholder="What's in your mind"
            className='shareInput'
             />

        </div>
        <hr className='shareHR' />
        <div className='shareBottom'>
            <div className='shareOptions'>
                <div className='shareOption'>
                    <span className='shareOptionText'>Photos or Videos</span>
                </div>
                <div className='shareOption'>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className='shareOption'>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className='shareOption'>
                    <span className='shareOptionText'>Feeling</span>
                </div>
            </div>
            <button className='shareButton'>Post</button>
        </div>
      </div>
    </div>
  )
}
