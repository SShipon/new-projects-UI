import React from "react";

export default function DataMonitor({ monitor, style, titleStyle }) {
  console.log(style);

  console.log(monitor);
  const { name, title, img, img1 } = monitor;
  return (
    <div className=" shadow p-4 ">
      <div className="flex justify-center">
        <div>
          <p className="font-bold text-sx">{name}</p>
          <h4 style={titleStyle} className="mr-2 font-extrabold text-2xl my-4">
            {title}
          </h4>
          <img className="" src={img} alt="" />
        </div>
        <div>
          {img && <img className="w-[48px] h-[48px] my-4 " src={img1} alt="" />}
        </div>
      </div>
    </div>
  );
}
