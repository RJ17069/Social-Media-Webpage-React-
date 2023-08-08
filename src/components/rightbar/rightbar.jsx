import React from 'react'
import "./rightbar.css"
import Online from "../online/Online";
import { Users } from "../../Data"


export default function rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarwrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/asserts/cake.png' alt='' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAD' src='/asserts/AD.png' alt='' />
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map( u=> (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
