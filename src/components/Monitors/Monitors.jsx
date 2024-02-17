import React from 'react'
import Card from './Cards/Card'
import "./Monitors.css";
import Analytics from './Analytics/Analytics'
import ContentTop from '../ContentTop/ContentTop'

export default function Monitors() {
  return (
    <div className='main-content'>
      <ContentTop/>
      <div className="relative">
      <hr className="w-5/6 absolute right-0" style={{border:'#E6EFF5 solid 1px'}} />
      </div>
      <Card />
      <Analytics />
    </div>
  )
}
