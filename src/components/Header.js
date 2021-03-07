import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { FaRunning } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";

function Header() {
    return (
        <div className="header">
            <div className="nav_logo">
            <a href="#"><img src="https://www.yoboshu.com/img/yoboshu-logo.png" alt="Yoboshu"/></a>
            </div>
            <div className="nav">
                <nav className="header_nav">
                    <Link to="/" className="link"><AiFillHome className="icon"/> Home</Link>
                    <Link to="/trainers"  className="link"><FaRunning className="icon"/> Trainers</Link>
                    <Link to="#"  className="link"><FaUsers className="icon"/> Boot Camp</Link>
                    <Link to="#"  className="link"><BsGraphUp className="icon"/> Fitness tools</Link>
                    <Link to="#" className="link"><RiAccountCircleFill className="icon"/> My Account</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header
