import React from "react"
import '../assets/styles/Menu.css'
import meme from '../assets/static/meme.jpg'
import hand from '../assets/static/hand.png'
import repost from '../assets/static/repost.png'
import box from '../assets/static/box.png'


const Home = () =>{
    return(
    <main className="timeline">
        <div className="post">
            <picture>
                <img src={meme} alt="Meme" />
            </picture>
            <section className="actions">
                <div className="actions-left">
                    <img src={hand} alt="" />
                    <img src={repost} alt="" />
                </div>
                <div className="actions-right">
                    <img src={box} alt="" />
                </div>
            </section>
        </div>
    </main>
    )
}

export default Home