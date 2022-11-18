import "./Header.css";
import React from 'react'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something Amazing With GPT-3 Open-AI</h1>
        <div className="gp3__header-content__input">
          <p>Plaksha is a technology university for the future and has been set up by a global community of entrepreneurs, business leaders and academicians to reimagine technology education and research</p>
         <input type="email" placeholder="Your email address"></input>
         <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
        <img src={people} alt="people"></img>
        <p>1600 people requested access</p>
        </div>
        <div className="gpt3__header-image">
        <img src={ai}></img>
        </div>
      </div>
    </div>
  )
}

export default Header