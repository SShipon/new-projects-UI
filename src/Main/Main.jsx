import React from 'react'
import Navigation from '../pages/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Welcome from '../components/Home/Welcome'

export default function Main() {
  return (
    <div>
      <Navigation />
      <Welcome></Welcome>
        <Outlet />
    </div>
  )
}
