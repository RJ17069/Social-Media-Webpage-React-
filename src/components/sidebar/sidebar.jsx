import React from 'react'
import "./sidebar.css"
import Friend from "../friend/friend"
import {Users} from "../../Data"

export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrap'>
        <ul className='sidebarList'>
        
          <li className='sidebarListIteam'>
            
            <span className='sidebarListText'>Feed</span>
          </li>
          <li className='sidebarListIteam'>
          
            <span className='sidebarListText'>Chats</span>
          </li>
          <li className='sidebarListIteam'>
            <span className='sidebarListText'>Videos</span>
          </li>
          <li className='sidebarListIteam'>
            <span className='sidebarListText'>Groups</span>
          </li>
          <li className='sidebarListIteam'>
            <span className='sidebarListText'>Bookmarks</span>
          </li>
          <li className='sidebarListIteam'>
            <span className='sidebarListText'>Questions</span>
          </li>
          <li className='sidebarListIteam'>
            <span className='sidebarListText'>Jobs</span>
          </li>
          <li className='sidebarListIteam'>
            <span className='sidebarListText'>Events</span>
          </li>
          <li className='sidebarListIteam'>
            <span className='sidebarListText'>Course</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHR'/>
        <ul className='sidebarFriendList'>
          
          {Users.map(u=>(
            <Friend key={u.id} user={u} />
          ))}
          
        </ul>
      </div>
    </div>
  )
}
