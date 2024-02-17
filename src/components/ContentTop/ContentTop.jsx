import { SidebarContext } from "../../context/SidebarContext";
import { iconsImgs } from "../../utils/images";
import { personsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import notification from '../../assets/Home/002-notification-1.png';
import settings from '../../assets/Home/settings 1.png';

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top ml-4 mr-4">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="" />
        </button>
      </div>
      <div className="content-top-btns">
        <div className=" flex gap-3">
          <div className="nav-settings">
            <img src={settings} alt="" />
            {/* <i class="fa-solid fa-gear"></i> */}
          </div>
          <div className="nav-notification">
            <img src={notification} alt="" />
            {/* <i class="fa-regular fa-bell"></i> */}
          </div>
          <div className="nav-userImage">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentTop
