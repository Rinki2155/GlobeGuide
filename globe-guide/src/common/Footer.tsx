import React from 'react';

const Footer = () => {
    const footerMenu = ['Globe-Guide','Home', 'About', 'Create Itinerary', 'Destination','Search'];

    const FooterMenuData = footerMenu.map((footerdata, index) => (
        <li key={footerdata}>
            <a href={`#${footerdata.toLocaleLowerCase().replace(" ", "_")}`} className="footer-link">
                {footerdata}
            </a>
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
                  <a href="#">Hong Kong</a>
                  <h5>India</h5>
                  <a href="#">Agra Taj Mahal Visit</a><br />
                  <a href="#">Chennai International Airport</a><br />
                  <a href="#">Jaipur Tour</a><br />
                  <a href="#">Mumbai</a><br />
                  <a href="#">New Delhi</a><br />
                  <h5>Japan</h5>
                  <a href="#">Fukuoka/Hakata</a><br />
                  <a href="#">Hiroshima</a><br />
                  <a href="#">Kyoto</a><br />
                  <a href="#">Nagoya Chubu Centrair Airport</a><br />
                  <a href="#">Osaka</a><br />
                  <a href="#">Tokyo</a><br />
                  <h5>Korea</h5>
                  <a href="#">Busan</a><br />
                  <a href="#">Seoul</a><br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Macau/Macao</h5>
                  <a href="#">Macau</a>
                  <h5>Malaysia</h5>
                  <a href="#">Kuala Lumpur</a>
                  <h5>Singapore</h5>
                  <a href="#">Singapore</a>
                  <h5>Taiwan</h5>
                  <a href="#">Kaohsiung</a><br />
                  <a href="#">Taipei</a>
                  <h5>Thailand</h5>
                  <a href="#">Bangkok</a>
                  <h5>United Arab Emirates</h5>
                  <a href="#">Dubai</a>
                  <h5>Vietnam</h5>
                  <a href="#">Da Nang Airport</a><br />
                  <a href="#">Ho Chi Minh City (Saigon) Airport</a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Macau/Macao</h5>
                  <a href="#">Macau</a>
                  <h5>Malaysia</h5>
                  <a href="#">Kuala Lumpur</a>
                  <h5>Singapore</h5>
                  <a href="#">Singapore</a>
                  <h5>Taiwan</h5>
                  <a href="#">Kaohsiung</a><br />
                  <a href="#">Taipei</a>
                  <h5>Thailand</h5>
                  <a href="#">Bangkok</a>
                  <h5>United Arab Emirates</h5>
                  <a href="#">Dubai</a>
                  <h5>Vietnam</h5>
                  <a href="#">Da Nang Airport</a><br />
                  <a href="#">Ho Chi Minh City (Saigon) Airport</a>
                </div>
              </div>
            </div>
                </ul>
            
            </div>
        </>
    );
};

export default Footer;
