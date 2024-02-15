import React from 'react'
import Navigation from '../pages/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}