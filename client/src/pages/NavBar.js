
import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { MdOutlineBloodtype } from "react-icons/md";

export function NavBar() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <a href="#home" className="nav-logo d-flex align-items-center">
                        <MdOutlineBloodtype color="red" size={28} />
                        <span className="ms-2 fs-4 fw-bold text-white">
                            RED <span className="text-warning">RESERVE</span>
                        </span>
                    </a>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a
                                href="#home"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#about"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#blog"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/login"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Account
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}
