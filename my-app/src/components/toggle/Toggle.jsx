import React, { useContext } from 'react'
import './toggle.css'
import { ThemeContext } from '../../context'

const Toggle = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }
  return (
    <div className="t" style={{backgroundColor: darkMode ? "#e8e5e1" : "#171c33"}}>
        <div className="t-button" onClick={handleClick}
        style={{left: darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle