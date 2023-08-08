import "./home.css"
import Topbar from "../../components/topbar/topbar";
import Feeds from "../../components/feeds/feeds";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";





export default function home() {
  return (
    <>
    <Topbar/>
    <div className="container">
      
      <Sidebar/>
      <Feeds/>
    
      <Rightbar />

    </div>
  
    </>
  )
}
