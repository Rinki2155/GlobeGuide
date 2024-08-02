import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../pages/Slider';
import CreateDestination from '../pages/CreateDestination';
import { Nav } from 'react-bootstrap';
import Itinerary from '../pages/Itinerary';

export const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showItinerary, setShowItinerary] = useState(false);
    const [showDestination, setShowDestination] = useState(false);


    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleItineraryMouseClick = () => {
        setShowItinerary(true);
    }

    const handleDestinationMouseClick = () => {
        setShowDestination(true);
    }
    const handleItineraryMouseClickRemove = () => {
        setShowItinerary(false);
    }

    const handleDestinationMouseClickRemove = () => {
        setShowDestination(false);
    }
  
    const navItem = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Create Itinerary", path: "/create-itinerary" },
        { name: "Destination", path: "/destination" },
        // { name: "Search", path: "/search" }
    ];

    const navData = navItem.map((menuItem, index) => (
        <li key={menuItem.name} className={`nav-item ${index === 0 ? 'home-item' : ''}`}
            onClick={index === 2 ? handleItineraryMouseClick : index === 3 ? handleDestinationMouseClick : undefined}
            onMouseUp={index === 2 ? handleItineraryMouseClickRemove : index === 3 ? handleDestinationMouseClickRemove : undefined}

        >
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
            {
                // showItinerary && <Itinerary />
            }
            {
                // showDestination && <CreateDestination />
            }
        </div>
    );
};
