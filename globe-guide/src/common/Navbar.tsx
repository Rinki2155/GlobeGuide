import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navItem = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Create Itinerary", path: "/create-itinerary" },
        { name: "Destination", path: "/destination" },
        { name: "Search", path: "/search" }
    ];

    const navData = navItem.map((menuItem, index) => (
        <li key={menuItem.name} className={`nav-item ${index === 0 ? 'home-item' : ''}`}>
            <Link to={menuItem.path} className="nav-link" onClick={toggleDrawer}>
                {menuItem.name}
            </Link>
        </li>
    ));

    return (
        <div className='container-fluid'>
            <nav className="navbar">
                <button className="toggle-button" onClick={toggleDrawer}>
                    ☰  <img src="Image/logo.png" alt="logo" className="nav-logo-small-screen" />
                </button>
                <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <img src="Image/logo.png" alt="logo" className="nav-logo" />
                        </li>
                        {navData}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
