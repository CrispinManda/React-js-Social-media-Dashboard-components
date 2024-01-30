import React from 'react'
import './RightCenter.scss'
import Avatar from '../assets/Avatar.png'
import video from '../assets/video.png'
import vectoround from '../assets/vectoround.png'
import vectorstar from '../assets/vectorstar.png'
import unsplash from '../assets/unsplash.png'
import Vectorfour from '../assets/Vectorfour.png'
import Groupthree from '../assets/Groupthree.png'
import Groupfour from '../assets/Groupfour.png'

const RightCenter = () => {
  return (
    <div className='right-center'>
        <div className="top">
            <div className="pro">
                <img src={Avatar} alt="" />
            </div>
            <div className="input" >
                <input className='input-text' type="text" placeholder='Whats on your mind?' />
            </div>
        </div>
        <div className="bottom">

            <div className="img">
                <img src={video} alt="" />
                <p>Live Video</p>
            </div>

            <div  className="img">
                <img src={vectorstar} alt="" />
                <p>Image/Video</p>
            </div>

            <div className="img">
                <img src={vectoround} alt="" />
                <p>Activity</p>
            </div>

        </div>

        <div className="ground">
            <div className="pro">
                <img src={Avatar} alt="" />
                <div className="info">
                    <h4>Angela Lee</h4>
                    <p>56 mins ago</p>
                </div>
            </div>
            <div className="text">
                <p>Here are some photography works that i made on the weekend with<br /> some of my friends, happy for that!</p>
            </div>
            <div className="images">
                <img src={unsplash} alt="" />
                <img src={unsplash} alt="" />
            </div>
            <div className="likes">
                <img src={Vectorfour} alt="" />
                <img src={Groupthree} alt="" />
                <img src={Groupfour} alt="" />
            </div>
            <div className="text-message">
                <input type="text" placeholder='Write your message...'/>
            </div>
        </div>
    </div>
  )
}


export default RightCenter


