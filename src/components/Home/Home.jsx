import React from 'react'
import rocket from '../../assets/rocket-white.png'
import wealth from '../../assets/wealth-creation.png'

export default function Home() {
  return (
    <section className='pt-20'>
      {/* Top Section of Core Overview */}
      <div className='flex gap-x-5 mx-8'>
        <div className='flex basis-2/3 justify-between p-4 shadow-xl rounded-2xl'>
          <div className='font-bold text-xl pt-8 pl-5'>
            Welcome X
            </div>
          <div>
            <img src={rocket} alt="rocket" className='rounded-md' />
          </div>
        </div>

        <div className='p-4 shadow-xl rounded-2xl w-1/3'>
          <div className='text-white rounded-2xl relative'>
            <img src={wealth} alt="wealth-creation" />
            <div>
              <h3 className='absolute left-4 top-2 font-bold text-xl pb-4 pt-2'>Lorem</h3>
              <p className='absolute left-4 top-12'>Lorem ipsum bla bla</p>
              <p className='absolute left-4 bottom-2 font-semibold text-lg'>Read More &rarr;</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
