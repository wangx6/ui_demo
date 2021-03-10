import React from 'react'
import './HeaderMenu.css';

export default function HeaderMenu() {
    return (
        <div className="lqe-hdr-menu">
            <div className="container navbar-container">
				<ul className="nav navbar-nav">
					<li id="menuHealth" className="navbar-li">Health</li>
					<li id="menuTravel" className="navbar-li">Travel</li>
					<li id="menuDental" className="navbar-li">Dental</li>
					<li id="menuLife" className="navbar-li">Life</li>
					<li id="menuSwiftCarNamee" className="navbar-li">Swiftcare</li>
					<li id="menuClaims" className="navbar-li">Claims</li>
					<li id="menuMembers" className="navbar-li">Members</li>
					<li id="menuEmployers" className="navbar-li">Employers</li>
					<li id="menuBlog" className="navbar-li">Blog</li>
				</ul>
			</div>
        </div>
    )
}