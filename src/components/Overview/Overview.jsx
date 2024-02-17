import React from 'react'
import rocket from '../../assets/rocket-white.png'
import wealth from '../../assets/wealth-creation.png'
import filter from '../../assets/filter.png'
import path from '../../assets/global-uptime-path.svg'
import meta_logo from '../../assets/meta-logo.png'
import meta_cloud from '../../assets/meta-cloud.png'
import microsoft_logo from '../../assets/microsoft-logo.png'
import microsoft_cloud from '../../assets/microsoft-cloud.png'
import google_logo from '../../assets/google-logo.png'
import google_cloud from '../../assets/google-cloud.png'
import right_arrow from '../../assets/right-arrow.png'
import elipsis from '../../assets/elipsis.png'
import bar_chart from '../../assets/bar-chart.png'

export default function Overview() {
  return (
    <section className='max-w-[1280px] pt-20 mx-auto'>
      {/* Top Section of Core Overview */}
      <div className='flex gap-x-5 m-8 p-4 items-center'>
        <div className='flex basis-2/3 justify-between p-4 shadow-xl rounded-2xl'>
          <div className='font-bold text-xl pt-8 pl-5 relative'>
            Welcome X
            <p className='absolute bottom-2 text-3xl font-bold'>&rarr;</p>
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
      {/* END of Top Section of Core Overview */}

      {/* Global Uptime & Social Section */}
      <div className='flex gap-x-5 m-8 p-4 items-center'>
        <div className='bg-gradient-to-br from-[#ffffff33] to-[#00a76f33] pl-8 pr-5 py-4 rounded-3xl'>
          <div className='flex gap-x-4 items-center text-[#004b50]'>
            <div>
              <h5 className='font-bold text-xl pb-5'>Global Uptime</h5>
              <h3 className='font-bold text-4xl pb-5'>98.74%</h3>
            </div>
            <div className='px-5'>
              <p className='pb-4'>last 3 months</p>
              <img className='ml-auto w-1/4' src={filter} alt="filter" />
            </div>
          </div>
          <img src={path} alt="path" className='py-5' />
        </div>
        {/* socials */}
        <div className='flex gap-x-6'>
          {/* meta */}
          <div>
            <div className='flex justify-around gap-x-5 items-center'>
              <div className='flex items-center gap-x-1.5'>
                <img src={meta_logo} alt="meta" />
                <h5 className='font-bold text-xl'>Meta</h5>
              </div>
              <img className='w-2/5' src={meta_cloud} alt="meta" />
            </div>

            <div className='flex justify-around gap-x-3 pt-5'>
              <div>
                <div className='pb-3'>Uptime</div>
                <div>Load Average</div>
              </div>
              <div>
                <h6 className='font-bold pb-3'>89%</h6>
                <p className='text-red-600'>1200ms &darr;</p>
              </div>
            </div>
          </div>
          
          {/* meta */}
          <div>
            <div className='flex justify-around gap-x-5 items-center'>
              <div className='flex items-center gap-x-1.5'>
                <img src={meta_logo} alt="meta" />
                <h5 className='font-bold text-xl'>Meta</h5>
              </div>
              <img className='w-2/5' src={meta_cloud} alt="meta" />
            </div>

            <div className='flex justify-around gap-x-3 pt-5'>
              <div>
                <div className='pb-3'>Uptime</div>
                <div>Load Average</div>
              </div>
              <div>
                <h6 className='font-bold pb-3'>89%</h6>
                <p className='text-red-600'>1200ms &darr;</p>
              </div>
            </div>
          </div>
          {/* microsoft */}
          <div>
            <div className='flex justify-around gap-x-5 items-center'>
              <div className='flex items-center gap-x-1.5'>
                <img src={microsoft_logo} alt="microsoft" />
                <h5 className='font-bold text-xl'>Microsoft</h5>
              </div>
              <img className='w-2/5' src={microsoft_cloud} alt="microsoft" />
            </div>

            <div className='flex justify-around gap-x-3 pt-5'>
              <div>
                <div className='pb-3'>Uptime</div>
                <div>Load Average</div>
              </div>
              <div>
                <h6 className='font-bold pb-3'>100%</h6>
                <p className='text-red-600'>250ms &darr;</p>
              </div>
            </div>
          </div>
          {/* google */}
          <div>
            <div className='flex justify-around gap-x-5 items-center relative'>
              <div className='flex items-center gap-x-1.5'>
                <img src={google_logo} alt="google" />
                <h5 className='font-bold text-xl'>Google</h5>
              </div>
              <img className='w-2/5' src={google_cloud} alt="google" />
              <img className='absolute -right-6 cursor-pointer' src={right_arrow} alt="google" />
            </div>

            <div className='flex justify-around gap-x-3 pt-5'>
              <div>
                <div className='pb-3'>Uptime</div>
                <div>Load Average</div>
              </div>
              <div>
                <h6 className='font-bold pb-3'>98.9%</h6>
                <p className='text-red-600'>900ms &darr;</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* END of Global Uptime & Social Section */}
      {/* Monitors & Latencies Section */}
      <div className='flex gap-x-5 m-8 p-4 items-center'>
        {/* monitors */}
        <div className='p-4 shadow-xl rounded-2xl'>
          <h3 className='font-bold text-2xl pb-8 pt-2 capitalize'>total monitors</h3>
          <div className='flex px-8 gap-x-6'>
            <ul className='list-disc'>
              <li className='font-bold text-md pb-4 marker:text-green-500 capitalize'>
                healthy monitors<br />120
              </li>
              <li className='font-bold text-md pb-4 marker:text-red-500 capitalize'>
                down monitors<br />25
              </li>
              <li className='font-bold text-md pb-4 marker:text-cyan-500 capitalize'>
                maintenance<br />45
              </li>
            </ul>
            <img src={elipsis} alt="elipsis" />
          </div>
        </div>
        {/* bar-chart */}
        <div>
          <img src={bar_chart} alt="bar_chart" />
        </div>
      </div>
      {/* END of Monitors & Latencies Section */}
    </section>
  )
}
