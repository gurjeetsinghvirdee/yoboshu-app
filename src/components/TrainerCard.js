import React from 'react'
import './TrainerCard.css'
import { Link } from 'react-router-dom'

function TrainerCard({prop}) {
    return (
        <div className="trainercards">
            <div className="trainercardsrow">
                <Link to="/trainermain/:id" className="link"></Link>
                <div className="column">
                    <img src={prop.img}/>
                    <h3>{prop.name}</h3>
                    <h4>{prop.experience}</h4>
                    <h4>{prop.expertise}</h4>
                </div>
                <div className="column">
                    <img src={prop.img}/>
                    <h3>{prop.name}</h3>
                    <h4>{prop.experience}</h4>
                    <h4>{prop.expertise}</h4>
                </div>
            </div>
            <div className="body">
                <div className="profile">
                    <span>{prop.modeoftraining1}</span>
                    <span>{prop.modeoftraining2}</span>
                    <span>{prop.modeoftraining3}</span>
                    <span>{prop.pricing}</span>
                </div>
                <div className="btn">
                    <button>BOOK</button>
                </div>

                <div className="profile">
                    <span>{prop.modeoftraining1}</span>
                    <span>{prop.modeoftraining2}</span>
                    <span>{prop.modeoftraining3}</span>
                    <span>{prop.pricing}</span>
                </div>
                <div className="btn">
                    <button>BOOK</button>
                </div>
            </div>
            
           
        </div>
    )
}

export default TrainerCard
