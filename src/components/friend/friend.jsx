import React from 'react'

export default function friend({user}) {
  return (
    <div>
      <li className='sidebarFriend'>
            <img src={user.profilePicture} className='sidebarFriendImg' alt=''/>
            <span className='sidebarFriendName'>{user.username}</span>
          </li>
    </div>
  )
}
