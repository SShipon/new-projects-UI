import React, { useState } from 'react'
import { transactions } from '../../data/data'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(prev => !prev);
  }

  const items = transactions.map(item =>
    <div key={item.id} className='bg-blue-400 w-full'>
      <h3 className='hover:bg-sky-300 cursor-pointer text-center py-2 border-4 border-transparent hover:border-l-white hover:font-bold'>{item.name}</h3>
    </div>
  );

  return (
    <div className='h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600 w-full'>
      <div>
        <button
          onClick={handleDropDown}
          className='bg-blue-400 px-4 py-2 rounded-lg w-full font-bold text-lg tracking-wider border-4 border-transparent active:border-white active:text-white'
        >
          Dropdown
          {isOpen ? <>&uarr;</> : <>&darr;</>}
        </button>
        {isOpen && items}
      </div>
      
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">Click</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>

      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">Click</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}