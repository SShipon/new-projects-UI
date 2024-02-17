import React from "react";
// first card
import icons3 from "../../assets/Monitor/SVG.png";
import icons1 from "../../assets/Monitor/Frame.png";
// second card
import icons from "../../assets/Monitor/Frame (1).png";
import icons4 from "../../assets/Monitor/SVG (1).png";
// last card
import icons2 from "../../assets/Monitor/Img.png";
import icons5 from "../../assets/Monitor/SVG (2).png";
import icons6 from "../../assets/Monitor/info-card-2.png";
import Monitor from "./Monitor";
export default function Monitors() {
  const monitors = [
    {
      id: 1,
      name: "Total Monitors",
      title: "113",
      // Additional styles for the first card (index 0)
      style: {
        fontSize: "28px",
        color: "blue",
        // Add any other styles you want to customize
      },
      titleStyle: {
        fontSize: "36px",
        fontWeight: "900",
        textAlign: "center",
        color: "black",

        // Add any other title styles you want to customize
      },
    },
    {
      id: 2,
      img: icons1,
      img1: icons3,
      name: "Healthy",
      title: "90",
    },
    {
      id: 3,
      img: icons,
      img1: icons4,
      name: "Down",
      title: "8",
    },
    {
      id: 4,
      img: icons2,
      img1: icons5,
      name: "Pause",
      title: "15",
    },
  ];
  return (
    <div className="ml-10 p-10">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {monitors.map((monitor, index) => (
          <Monitor
            key={monitor.id}
            monitor={monitor}
            style={index === 0 ? monitor.style:null}
            titleStyle={monitor.titleStyle}
          />
        ))}
      </div>
    </div>
  );
}


/* style={index === 0 && monitor.style}
            titleStyle={monitor.titleStyle} */