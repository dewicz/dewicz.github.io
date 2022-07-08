import React from 'react'
import "./intro.css"
const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hey, I'm</h2>
                <h1 className="i-name">Domi Dewicz</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Fullstack Developer</div>
                    </div>
                </div>
                <div className="i-desc">
                    I develop services for customers of all sizes, specializing in modern, responsive websites, web services and apps.
                    
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            </div>  
    </div>
)
}

export default Intro