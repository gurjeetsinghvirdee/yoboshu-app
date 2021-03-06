import React from 'react'
import './Trainers.css'
import data from '../components/data';
import TrainerCard from './TrainerCard';

function Trainers() {
    return (
        <div className="trainers">
            {
                data.trainers.map((item)=>{
                    return <TrainerCard prop={item}/>
                })
            }
        </div>
    )
}

export default Trainers
