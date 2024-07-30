import React, { useState } from 'react';

export const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const navItem = ["Home", "About Us", "Create Itinerary", "Destination", "Search"];

    const navData = navItem.map((menuItem, index) => (
        <li key={menuItem} className={`nav-item ${index === 0 ? 'home-item' : ''}`}>
            <a href={`#${menuItem.toLowerCase().replace(" ", "-")}`} className="nav-link">
                {menuItem}
            </a>
        </li>
    ));

    return (
        <>
            <div className='container-fluid'>
                <nav className="navbar">
                    <button className="toggle-button" onClick={toggleDrawer}>
                        ☰
                    </button>
                    <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <img src="Image/logo.png" alt="logo" className="nav-logo" />
                            </li>
                            {navData}
                            <li className="nav-item">
                                <img src="Image/logo.png" alt="logo" className="nav-logo" />
                            </li>
                        </ul>
                    </div>
                </nav></div>
        </>

    );
}
