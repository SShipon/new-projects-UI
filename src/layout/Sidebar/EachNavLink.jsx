import React, { useState } from 'react'

export default function EachNavLink({ navLink, isOpen, subtitles, handleDropDown }) {
  const [activeLinkIdx] = useState(1);
  const { id, image, title } = navLink;
  // console.log(subtitles);

  const subtitle = subtitles?.map((item, i) =>
    <div key={i} className='bg-gray-100 w-full'>
      <h3 className='hover:bg-gray-300 cursor-pointer text-center py-2 border-4 border-transparent hover:border-l-white hover:font-bold'>
        {item}
      </h3>
    </div>
  );

  return (
    <li className="nav-item" onClick={handleDropDown}>
      <div className={ `nav-link ${ id === activeLinkIdx ? 'active' : null }` }>
        <img src={ image } className="nav-link-icon" alt = { title } />
        <span className="nav-link-text">{ title }</span>
      </div>
      {isOpen && subtitle}
    </li>
  )
}