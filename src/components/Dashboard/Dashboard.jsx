import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
    <div className="drawer lg:drawer-open bg-white border-rose-50">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />

  <div className="drawer-content">
    
    {/* Page content here */}
    <Outlet></Outlet>
  </div>
 
  <div className="drawer-side">
  <span className=' block text-center'>UpTime</span>
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>

    <ul className="  bg-white text-base">
      {/*content here */}

      <li>
        <NavLink to="/dashboard/Overview">Overview</NavLink>
      </li>
    </ul>
    <ul className="  bg-white text-base  ">
      {/*content here */}

      <li>
        <NavLink to="">Overview</NavLink>
      </li>
    </ul>
    <ul className=" bg-white text-base">
      {/*content here */}

      <li>
        <NavLink to="">Overview</NavLink>
      </li>
    </ul>
  </div>
</div>
  </>
  )
}
