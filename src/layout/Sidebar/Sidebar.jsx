import { useEffect, useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if(isSidebarOpen){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  const firstItems =(
    <ul className="nav-list">
    {
      navigationLinks.map((navigationLink) => (
        <li className="nav-item" key = { navigationLink.id }>
          <div className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
              <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
              <span className="nav-link-text">{ navigationLink.title }</span>
          </div>
        </li>
      ))[0]
    }
  </ul>
  )
  const firstItems2 =(
    <ul className="nav-list">
    {
      navigationLinks.map((navigationLink) => (
        <li className="nav-item" key = { navigationLink.id }>
          <div className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
              <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
              <span className="nav-link-text">{ navigationLink.title }</span>
          </div>
        </li>
      )).slice(1)
    }
  </ul>
  )
  return (
    <div className={ `sidebar ${sidebarClass}` }>
      <div className="user-info">
          <div className="">
              <img src={ personsImgs.person_two } alt="profile image" />
          </div>
      </div>

      <nav className="navigation">
      <span className='mr-2'>UPTIME</span>
         {
          firstItems
         }
         {
          firstItems2
         }
      </nav>
    </div>
  )
}

export default Sidebar
