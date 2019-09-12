import React from 'react'
import './style.css'

const Button = ({ children, onClick }) => (
  <button className="btn" onClick={onClick}>
    {children}
  </button>
)

export default Button
