import React, { useState } from 'react'

export default function EachNavLink({ navLink }) {
  const [activeLinkIdx] = useState(1);
  const { id, image, title } = navLink;

  return (
    <li className="nav-item">
      <div className={ `nav-link ${ id === activeLinkIdx ? 'active' : null }` }>
        <img src={ image } className="nav-link-icon" alt = { title } />
        <span className="nav-link-text">{ title }</span>
      </div>
    </li>
  )
}