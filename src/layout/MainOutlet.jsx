import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ProfileIntro from '../components/profile-intro/ProfileIntro'
import "./MainOutlet.scss"

const MainOutlet = () => {
    return (
        <div className="main-container">
            <Navbar />
            <div className='portfoilo-container'>
                <div className="portfolio-base">
                    <ProfileIntro />
                </div>
                <main className='outlets'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainOutlet