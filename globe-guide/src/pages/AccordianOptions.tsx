import React from 'react'

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
                  <a href="#">Denali National Park</a><br />
                  <a href="#">Kenai Fjords National Park</a><br />
                  <h5>Arizona</h5>
                  <a href="#">Grand Canyon National Park</a><br />
                  <h5>Arizona and Utah Border</h5>
                  <a href="#">Glen Canyon National Recreation Area</a><br />
                  <h5>California</h5>
                  <a href="#">Fresno Airport</a><br />
                  <a href="#">Los Angeles</a><br />
                  <a href="#">San Diego</a><br />
                  <a href="#">San Francisco</a><br />
                  <a href="#">Sequoia National Park</a><br />
                  <a href="#">Yosemite National Park</a><br />
                  <h5>Florida</h5>
                  <a href="#">John Pennekamp Coral Reef State Park (Florida)</a><br />
                  <a href="#">Miami</a><br />
                  <a href="#">Orlando</a><br />
                  <h5>Hawaii</h5>
                  <a href="#">Honolulu (Oahu Island)</a><br />
                  <a href="#">Kona Airport (Big Island)</a><br />
                  <h5>Massachusetts</h5>
                  <a href="#">Boston</a><br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Nevada</h5>
                  <a href="#">Las Vegas</a><br />
                  <h5>New Jersey</h5>
                  <a href="#">Newark Liberty Airport</a><br />
                  <h5>New York</h5>
                  <a href="#">New York City</a><br />
                  <h5>Oregon</h5>
                  <a href="#">Portland</a>
                  <h5>The District of Columbia</h5>
                  <a href="#">Washington, D.C.</a>
                  <h5>Utah</h5>
                  <a href="#">Arches National Park</a><br />
                  <a href="#">Bryce Canyon National Park</a><br />
                  <a href="#">Canyonlands National Park</a><br />
                  <a href="#">Capitol Reef National Park</a><br />
                  <a href="#">Natural Bridges National Monument</a><br />
                  <a href="#">Salt Lake City Airport</a><br />
                  <a href="#">Zion National Park</a><br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <h5>Virginia</h5>
                  <a href="#">Shenandoah National Park</a>
                  <h5>Washington</h5>
                  <a href="#">Mount Rainier National Park</a><br />
                  <a href="#">Mount St. Helens National Volcanic Monument</a><br />
                  <a href="#">Seattle</a>
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
              <a href="#">Vancouver</a><br />
              <a href="#">Victoria BC</a><br />
              <h5>Ontario</h5>
              <a href="#">Toronto</a>
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
