import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-desc">
                In 2019 I graduated from Queen Mary University in London with a BSc in Computer Science. I've been working in the industry ever since, focusing on building user-friendly, scalable financial systems. My expertise is in microservice architecture (Java), and frontend solutions (Angular/React). I'm also exploring mobile development.
            </p>
        </div>
    </div>
  )
}

export default About