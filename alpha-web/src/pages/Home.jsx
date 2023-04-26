import React from 'react'
import realm1 from "../images/realm1.jpg"
import realm2 from "../images/realm2.jpg"
import realm3 from "../images/realm3.jpg"
import realm4 from "../images/realm4.jpg"

export default function Home() {

  
  return (
    <>
        <div className='images'>
          <img className='grid-img' src={realm1}></img>
          <img className='grid-img' src={realm2}></img>
          <img className='grid-img' src={realm3}></img>
          <img className='grid-img' src={realm4}></img>
        </div>
      <div id='home'>
        <h1>ALPHA NETWORK</h1>

        <p>✦| Alpha Network |✦<br></br>
          <br></br>
          MCBE community that started up around 12 months ago. Currently, we bring to the community, Alpha Skyblock.<br></br>

          What we offer...<br></br><br></br>

          🌎︱A diverse realm, both unique in many ways.<br></br>
          🎈︱Frequent giveaways and enticing events.<br></br>
          🤝︱Friendly and welcoming staff.<br></br>
          💬︱A safe environment for work, socializing and more.<br></br>
          ⬆️︱Popular and ever growing realm and discord server.<br></br>
          <br></br>
          So, what are you waiting for? Links are listed below!<br></br>

          <br></br><br></br>
          ➣ Discord Server<br></br>
          <a href='https://discord.gg/yK66xcUUGp'>https://discord.gg/yK66xcUUGp</a><br></br><br></br>


          <a href='https://realms.gg/Un76WaaBQn8'>https://realms.gg/Un76WaaBQn8</a>
       </p>

      </div>

    </>
  )
}
