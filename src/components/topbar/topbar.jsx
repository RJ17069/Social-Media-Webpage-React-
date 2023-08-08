import React from "react"

import "./topbar.css"




export default function topbar() {
  
  return(
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="Logo">RJSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          
          <input placeholder="Search input" className="searchInput"></input>

        </div>

      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">

            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">

            <span className="topbarIconBadge">1</span>

          </div>
          <div className="topbarIconItem">
            <span className="topbarIconBadge">1</span>

          </div>
        </div>
        <img alt="" src="/asserts/1.jpg" className="topbarImg"/>

      </div>
      

    </div>
  )
  
}
