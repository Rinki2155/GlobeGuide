import React from 'react';
import { Link } from 'react-router-dom';

const AccordianOptions = () => {
  return (
    <>
          <div className="container mt-5">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h3 className='mx-3'>Asia</h3>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
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
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h3 className='mx-3'>US</h3>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Alaska</h5>
                  <Link to="#">Denali National Park</Link><br />
                  <Link to="#">Kenai Fjords National Park</Link><br />
                  <h5>Arizona</h5>
                  <Link to="#">Grand Canyon National Park</Link><br />
                  <h5>Arizona and Utah Border</h5>
                  <Link to="#">Glen Canyon National Recreation Area</Link><br />
                  <h5>California</h5>
                  <Link to="#">Fresno Airport</Link><br />
                  <Link to="#">Los Angeles</Link><br />
                  <Link to="#">San Diego</Link><br />
                  <Link to="#">San Francisco</Link><br />
                  <Link to="#">Sequoia National Park</Link><br />
                  <Link to="#">Yosemite National Park</Link><br />
                  <h5>Florida</h5>
                  <Link to="#">John Pennekamp Coral Reef State Park (Florida)</Link><br />
                  <Link to="#">Miami</Link><br />
                  <Link to="#">Orlando</Link><br />
                  <h5>Hawaii</h5>
                  <Link to="#">Honolulu (Oahu Island)</Link><br />
                  <Link to="#">Kona Airport (Big Island)</Link><br />
                  <h5>Massachusetts</h5>
                  <Link to="#">Boston</Link><br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Nevada</h5>
                  <Link to="#">Las Vegas</Link><br />
                  <h5>New Jersey</h5>
                  <Link to="#">Newark Liberty Airport</Link><br />
                  <h5>New York</h5>
                  <Link to="#">New York City</Link><br />
                  <h5>Oregon</h5>
                  <Link to="#">Portland</Link>
                  <h5>The District of Columbia</h5>
                  <Link to="#">Washington, D.C.</Link>
                  <h5>Utah</h5>
                  <Link to="#">Arches National Park</Link><br />
                  <Link to="#">Bryce Canyon National Park</Link><br />
                  <Link to="#">Canyonlands National Park</Link><br />
                  <Link to="#">Capitol Reef National Park</Link><br />
                  <Link to="#">Natural Bridges National Monument</Link><br />
                  <Link to="#">Salt Lake City Airport</Link><br />
                  <Link to="#">Zion National Park</Link><br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Virginia</h5>
                  <Link to="#">Shenandoah National Park</Link>
                  <h5>Washington</h5>
                  <Link to="#">Mount Rainier National Park</Link><br />
                  <Link to="#">Mount St. Helens National Volcanic Monument</Link><br />
                  <Link to="#">Seattle</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h3 className='mx-3'>Canada</h3>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <h5>British Columbia</h5>
              <Link to="#">Vancouver</Link><br />
              <Link to="#">Victoria BC</Link><br />
              <h5>Ontario</h5>
              <Link to="#">Toronto</Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginBottom:'8%'}}></div>
    </div>
    </>
  )
}

export default AccordianOptions
