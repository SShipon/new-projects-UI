import React from 'react'

export default function CreateMonitor() {
  return (
  <div className='mr-20'>
        <div className="lg:flex">
    
    <div className="lg:w-2/6">
    <h5 className='text-1xl lg:text-2xl font-extrabold my-4'>Web Monitor</h5>
    </div>
  
    {/* Right side with 4/6 width on large screens */}
    <div className="lg:w-4/6">
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
       <div>
       <label className="input input-bordered flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 relative left-0"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow absolute mx-6" placeholder="Search" /> 
</label>
</div>
  <div>
  <select className="select select-bordered w-full" placeholder='Short by:'>

  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
  </div>
  <div>
  <button className="btn w-full rounded-full shadow-2xl">Create Monitors</button>
  </div>

      </div>
    </div>
  </div>
  </div>
  )
}
