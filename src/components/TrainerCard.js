import React from 'react'
import './TrainerCard.css'
import { Link } from 'react-router-dom'
import { GoDeviceCameraVideo } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { FaTree } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";

function TrainerCard({prop}) {
    return (
        <div className="trainer__card">
            <Link to={`trainermain/${prop._id}`} className="link">
                <div className="trainercard__row1">
                    <div className="trainer__img">
                        <img src={prop.img1} alt="image"/>
                    </div>
                    <div className="trainer__info">
                            <h3>{prop.name}</h3>
                            <h4><GiStarFormation className="icon"/>Experience: {prop.experience}</h4>
                            <h4><FaTicketAlt className="icon"/>{prop.expertise}</h4>
                    </div>
                </div>
                <div className="trainercard__row2">
                    <div className="profile">
                        <span><GoDeviceCameraVideo className="icon"/>{prop.modeoftraining1}</span>
                        <span><AiFillHome className="icon"/>{prop.modeoftraining2}</span>
                        <span><FaTree className="icon"/>{prop.modeoftraining3}</span>
                        <h3><FaRupeeSign className="icon"/>{prop.pricing} / session</h3>
                    </div>
                    <div className="btn">
                        <button>B O O K</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TrainerCard
