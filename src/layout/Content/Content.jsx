import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import WebMonitors from "../../components/WebMonitors/WebMonitors";
import Monitors from "../../components/Monitors/Monitors";
import Card from "../../components/Cards/Card";
import CreateMonitor from "../../components/CreateMonitor/CreateMonitor";



const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <div className="relative">
      <hr className="w-5/6 absolute right-0" style={{border:'#E6EFF5 solid 1px'}} />
      </div>
      <Card />
      <WebMonitors/>
   {/* nitu start */}


{/* shipon */}
    
      
    </div>
  )
}

export default Content
