import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerMenu = ['Globe-Guide','Home', 'About', 'Create Itinerary', 'Destination','Search'];

    const FooterMenuData = footerMenu.map((footerdata, index) => (
        <li key={footerdata}>
            <Link to={`#${footerdata.toLocaleLowerCase().replace(" ", "_")}`} className="footer-link">
                {footerdata}
            </Link>
        </li>
    ));

    return (
        <>
            <div className="main-footer">
                <h5 className='text-center text-white py-5'>Welcome To Globe-Guide For Best Destination and any Trip Guidence. </h5>
                <ul className='footer-list'>
                    {/* {FooterMenuData} */}
                    <div className="container footer-body">
              <div className="row text-white">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3" style={{ color:'white'}}>
                  <h5>Hong Kong</h5>
                  <Link to="#">Hong Kong</Link>
                  <h5>India</h5>
                  <Link to="#">Agra Taj Mahal Visit</Link><br />
                  <Link to="#">Chennai International Airport</Link><br />
                  <Link to="#">Jaipur Tour</Link><br />
                  <Link to="#">Mumbai</Link><br />
                  <Link to="#">New Delhi</Link><br />
                  <h5>Japan</h5>
                  <Link to="#">Fukuoka/Hakata</Link><br />
                  <Link to="#">Hiroshima</Link><br />
                  <Link to="#">Kyoto</Link><br />
                  <Link to="#">Nagoya Chubu Centrair Airport</Link><br />
                  <Link to="#">Osaka</Link><br />
                  <Link to="#">Tokyo</Link><br />
                  <h5>Korea</h5>
                  <Link to="#">Busan</Link><br />
                  <Link to="#">Seoul</Link><br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Macau/Macao</h5>
                  <Link to="#">Macau</Link>
                  <h5>Malaysia</h5>
                  <Link to="#">Kuala Lumpur</Link>
                  <h5>Singapore</h5>
                  <Link to="#">Singapore</Link>
                  <h5>Taiwan</h5>
                  <Link to="#">Kaohsiung</Link><br />
                  <Link to="#">Taipei</Link>
                  <h5>Thailand</h5>
                  <Link to="#">Bangkok</Link>
                  <h5>United Arab Emirates</h5>
                  <Link to="#">Dubai</Link>
                  <h5>Vietnam</h5>
                  <Link to="#">Da Nang Airport</Link><br />
                  <Link to="#">Ho Chi Minh City (Saigon) Airport</Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Macau/Macao</h5>
                  <Link to="#">Macau</Link>
                  <h5>Malaysia</h5>
                  <Link to="#">Kuala Lumpur</Link>
                  <h5>Singapore</h5>
                  <Link to="#">Singapore</Link>
                  <h5>Taiwan</h5>
                  <Link to="#">Kaohsiung</Link><br />
                  <Link to="#">Taipei</Link>
                  <h5>Thailand</h5>
                  <Link to="#">Bangkok</Link>
                  <h5>United Arab Emirates</h5>
                  <Link to="#">Dubai</Link>
                  <h5>Vietnam</h5>
                  <Link to="#">Da Nang Airport</Link><br />
                  <Link to="#">Ho Chi Minh City (Saigon) Airport</Link>
                </div>
              </div>
            </div>
                </ul>
            
            </div>
        </>
    );
};

export default Footer;
