import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => (
  <div className="navigation">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </div>
)

export default Navigation;