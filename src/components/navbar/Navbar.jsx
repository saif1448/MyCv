import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { handleDownload } from '../../utils/DownloadDocs'




const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink className="name-container" to="/">
                <h2>Saif Mahmud Parvez</h2>
            </NavLink>
            <div className='navigation-link-container'>
                <NavLink to='/'><h3>Basic Information</h3></NavLink>
                <NavLink to='/experience'><h3>Experiecne</h3></NavLink>
                <NavLink to='/research'><h3>Research and Publications</h3></NavLink>
                <NavLink to='/projects'><h3>Projects</h3></NavLink>
                <NavLink to='/education'><h3>Education</h3></NavLink>
                <NavLink to="#" onClick={handleDownload}><h3>CV</h3></NavLink>
            </div>
        </div>
    )
}

export default Navbar