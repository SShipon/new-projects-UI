import React from "react";

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
                    <div className="mask mask-squircle w-12 h-12">img</div>
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
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default WebMonitors;
