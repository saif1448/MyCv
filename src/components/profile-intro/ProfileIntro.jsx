import React from 'react'
import ProfileImage from '../../assets/images/my_image_1.jpg'
import './ProfileIntro.scss'
import { Link } from 'react-router-dom'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { IoLogoGithub } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
const ProfileIntro = () => {
    return (
        <div className='profile-intro rounded-box'>
            <div className='profile-image-container'>
                <img className='profile-image' src={ProfileImage} alt="" />
            </div>
            <div className='profile-intro-details'>
                <h3>Saif Mahmud Parvez</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, corrupti ipsum cupiditate saepe repudiandae voluptatem molestias dolore explicabo a, non tempora porro nam, aperiam aliquid officiis nulla temporibus pariatur exercitationem?</p>
                <div className='contact-links'>
                    <ul className='links'>
                        <li>
                            <a href="mailto:saif.mahmud.parvez@gmail.com">
                                <HiEnvelope size={20} />
                                <span>Email</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/saif14/">
                                <FaLinkedin size={20} />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/saif1448">
                                <IoLogoGithub size={20} />
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://scholar.google.com/citations?user=ewJZQLoAAAAJ&hl=en&authuser=1">
                                <SiGooglescholar width={20} />
                                <span>Google Scholar</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileIntro