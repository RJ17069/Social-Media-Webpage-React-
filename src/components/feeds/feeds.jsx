import React from 'react'
import "./feeds.css"
import Share from "../share/share";
import Post from "../post/post";
import { Posts } from "../../Data"

export default function feeds() {
  return (
    <div className='feeds'>
      <div className='feedswrapper'>
        <Share />
        {Posts.map(p=>(
          <Post key={p.id} post={p}/>
        ))}
        

      </div>
    </div>
  );
}
