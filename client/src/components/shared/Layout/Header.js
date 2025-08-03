
import React, { useState } from 'react';
import { MdOutlineBloodtype } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    alert('Logout Successful!');
    navigate('/');
    window.location.reload();
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Roles allowed to see Home and Analytics links
  const allowedRoles = ['donar', 'admin', 'hospital', 'organisation'];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top px-3">
        <div className="container-fluid d-flex align-items-center">
          {/* Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center me-3">
            <MdOutlineBloodtype color="red" size={28} />
            <span className="ms-2 fs-4 fw-bold text-white">
              RED <span className="text-warning">RESERVE</span>
            </span>
          </Link>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Nav */}
          <div
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
            id="navbarContent"
            style={isOpen ? { marginTop: '-20px' } : {}}
          >
            <div
              className={`d-flex align-items-center ms-lg-auto ${isOpen ? 'flex-row' : 'flex-column flex-lg-row'}`}
              style={{ gap: '1rem', flexWrap: 'wrap' }}
            >
              {/* Welcome User */}
              {user && (
                <div
                  className="d-flex align-items-center text-white"
                  style={{ userSelect: 'none' }}
                >
                  <FaUserAlt className="me-1" />
                  <span className="me-1">Welcome</span>
                  <span className="text-warning fw-semibold me-2">
                    {user?.name || user?.hospitalName || user?.organisationName}
                  </span>
                  <span className="badge bg-secondary">{user?.role}</span>
                </div>
              )}

              {/* Nav Items */}
              <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
                {allowedRoles.includes(user?.role) && (
                  <>
                    <li className="nav-item mx-2">
                      <Link to="/HomePage" className="nav-link text-white" onClick={handleNavClick}>Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link to="/analytics" className="nav-link text-white" onClick={handleNavClick}>Analytics</Link>
                    </li>
                  </>
                )}

                {/* If user role not allowed, show just Home */}
                {!allowedRoles.includes(user?.role) && (
                  <li className="nav-item mx-2">
                    <Link to="/HomePage" className="nav-link text-white" onClick={handleNavClick}>Home</Link>
                  </li>
                )}

                <li className="nav-item mx-2">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    <HiOutlineLogout className="me-1" /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Push content down so page content not hidden under navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
};

export default Header;

