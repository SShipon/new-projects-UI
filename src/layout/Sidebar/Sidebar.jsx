import { useEffect, useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import EachNavLink from './EachNavLink';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if(isSidebarOpen){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  const items = (
    <ul className="nav-list">
      {
        navigationLinks.map((navLink, index) => {
          if (index == 0) {
            return (
              <Link to='/overview'>
                <EachNavLink
                  key = {navLink.id}
                  navLink={navLink}
                />
              </Link>
            )
          } else if(index == 1) {
            return (
              <Link to='/monitors'>
                <EachNavLink
                  key = {navLink.id}
                  navLink={navLink}
                />
              </Link>
            )
          } else {
            return (
              <EachNavLink
                key = {navLink.id}
                navLink={navLink}
              />
            )
          }
        })
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
        <span className='text-red-500'>UPTIME</span>
        {items}
      </nav>
    </div>
  )
}

export default Sidebar