import React from 'react';
import { useParams } from 'react-router';
import "./TrainerMain.css";
import data from './data'
import { FaRupeeSign } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { FaTree } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

function TrainerMain() {
    const params = useParams()
    const trainer = data.trainers.find((item)=> item._id === params.id)
    return (
        <div className="trainermain">
            <div className="trainermain__img">
                <img src={trainer.img1} alt={trainer}/>
                <img src={trainer.img2} alt={trainer}/>
                <img src={trainer.img3} alt={trainer}/>
                <img src={trainer.img4} alt={trainer}/>
            </div>
            <div className="trainermain__right">
                <div className="trainermain__info">
                    <div className="trainer__bio">
                        <h3>{trainer.name}</h3>
                        <h3>{trainer.experience}<span> of Experience</span></h3>
                    </div>
                    <div className="trainer__value">
                        <h3><FaRupeeSign className="icons"/>{trainer.pricing}<span> Per Session</span></h3>
                        <span><AiFillSafetyCertificate className="icons"/>{trainer.value}</span>
                    </div>
                </div>
                <div className="about">
                    <span>About me</span>
                    <p>{trainer.about}</p>
                </div>
                <div className="expertise">
                    <span>My Expertise</span>
                    <p>{trainer.expertise1}</p>
                    <p>{trainer.expertise2}</p>
                    <p>{trainer.expertise3}</p>
                </div>
                <div className="medical">
                    <span>Medical Condition Expertise</span>
                    <p>{trainer.medicalconditionexperience}</p>
                </div>
                <div className="location">
                    <span>My Location</span>
                    <p><MdLocationOn className="icons"/>{trainer.location}</p>
                </div>
                <div className="traing">
                    <span>Mode of Training</span>
                    <p><GoDeviceCameraVideo className="icons"/>{trainer.modeoftraining1}</p>
                    <p><AiFillHome className="icons"/>{trainer.modeoftraining2}</p>
                    <p><FaTree className="icons"/>{trainer.modeoftraining3}</p>
                </div>
                <div className="availability">
                    <span>Availability</span>
                    {
                        trainer.availability.map((item)=>{
                           return <p>{item}</p>
                        })
                    }
                </div>
                <div className="availability">
                    <span>1-on-1 Pricing</span>
                    <div className="card">
                        <span>STARTER PLAN</span>
                        <p>Buy <h3>{trainer.plan.starterplan.session}</h3> sessions</p>
                        <p>Rs <h3>{trainer.plan.starterplan.charge}</h3>/session</p>
                    </div>
                    <div className="card">
                        <span>POPULAR PLAN</span>
                        <p>Buy <h3>{trainer.plan.popularplan.session}</h3> sessions</p>
                        <p>Rs <h3>{trainer.plan.popularplan.charge}</h3>/session</p>
                    </div>
                    <div className="card">
                        <span>BEST VALUE PLAN</span>
                        <p>Buy <h3>{trainer.plan.bestvalueplan.session}</h3> sessions</p>
                        <p>Rs <h3>{trainer.plan.bestvalueplan.charge}</h3>/session</p>
                    </div>
                    <div className="note">
                        <p><strong>Note: </strong>{trainer.note}</p>
                    </div>
                    <div className="cards">
                        <span>{trainer.moneyback}</span>
                    </div>
                    <div className="days">
                        <span>Training Days</span>
                        <p>{trainer.trainingdays}</p>
                    </div>
                    <div className="languages">
                        <span>Languages</span>
                        {
                            trainer.languages.map((item)=>{
                                return <p><IoGlobeOutline className="icons"/>{item}</p>
                            })
                        }
                    </div>
                    <div className="education">
                        <span>Educational Qualification</span>
                        <p>{trainer.education}</p>
                    </div>
                    <div className="trainer__interest">
                        <span>People I love training with</span>
                        {
                            trainer.trainerinterest.map((item)=>{
                                return <p>{item}</p>
                            })
                        }
                    </div>
                    <div className="bttn">
                        <div className="join">
                            <button>JOIN BOOTCAMP</button>
                        </div>
                        <div className="book">
                            <button>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>                  
    )
}

export default TrainerMain
