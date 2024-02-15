import React from "react";
import china from '../../assets/logo/image 101 (1).png';
import canada from '../../assets/logo/image 94.png';
import africa from '../../assets/logo/image 102.png'
import more from '../../assets/logo/+ MORE.png'
const WebMonitors = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Status Monitor Name</th>
              <th>Uptime</th>
              <th>Load Average</th>
              <th>Locations</th>
              <th>Type</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask">
                      <div className="bg-green w-[10px] h-[10px] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <span>Clodevo</span>
                    </div>
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">70%</button>
              </th>
              <td><button className="btn btn-ghost btn-xs">230 ms</button></td>

              <th>
            
             <div className="flex">
                 <div className="relative  ml-2"> <img src={china} alt="" /></div>
                 <div className="absolute z-10 ml-6"><img src={canada} alt="" /></div>
                </div>
            
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">HTTP</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">5 m</button>
                <button className="btn btn-ghost btn-xs">...</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask">
                      <div className="bg-green w-[10px] h-[10px] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <span>Clodevo</span>
                    </div>
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">70%</button>
              </th>
              <td><button className="btn btn-ghost btn-xs">230 ms</button></td>

              <th>
            
              <div>
              <div className="flex relative items-center">
                 <div className="relative z-0 ml-2"> <img src={china} alt="" /></div>
                 <div className="absolute z-1 ml-6"><img src={africa} alt="" /></div>
                 <div className="absolute z-10 ml-10"><img src={canada} alt="" /></div>
                 <div className="absolute ml-20"><img src={more} alt="" /></div>
                 
                </div>
               
              </div>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">HTTP</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">5 m</button>
                <button className="btn btn-ghost btn-xs">...</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default WebMonitors;
