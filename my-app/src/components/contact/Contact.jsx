import React, { useRef, useState, useContext } from 'react'
import './contact.css'
import email from "../../images/email.png"
import pin from "../../images/pin.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w4nc1hk', 'template_db06nvi', formRef.current, '7ajKDmbT4BU2Eez5o')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's talk</h1>
                <div className="c-info-item">
                    <img src={email} alt="" className="c-icon" />
                    hello.domi@outlook.com
                </div>
                <div className="c-info-item">
                    <img src={pin} alt="" className="c-icon" />
                    New Cross, London
                </div>  
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story? </b> Always available for freelancing if the right project comes along
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode ? "#232248": "#FAF7F2"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode ? "#232248": "#FAF7F2"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode ? "#232248": "#FAF7F2"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor: darkMode ? "#232248": "#FAF7F2"}} rows="5" placeholder='Message' name="message"></textarea>
                    <button>Submit</button>
                    {done && "Thanks for getting in touch"}
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Contact