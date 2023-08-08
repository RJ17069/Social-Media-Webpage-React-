import React from 'react'

import "./post.css"
import { Users } from "../../Data"
export default function post({post}) {

    
  return (
    <div className='post'>
        <div className='postwrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='shareProfileImg' src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt='' />
                    <span className='postUserName'>
                    {Users.filter((u) => u.id === post?.userId)[0].username}
                    </span>
                    <span className='postTime'>{post.time}</span>
                </div>
                <div className='postTopRight'></div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post.desc}</span>

                <img className='postImg' src={post.photo} alt='' />
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='likeIcon' src='/asserts/heart.png'  alt=''></img>
                    <img className='likeIcon' src='/asserts/thumb.png' alt=''></img>
                    <span className='postLike'>{post.like} liked </span>
                </div>
                <div className='postBottomRight'>
                    <span className='postComment'>{post.comment} comment</span>
                
                </div>
                
            </div>

        </div>
      
    </div>
  )
}
