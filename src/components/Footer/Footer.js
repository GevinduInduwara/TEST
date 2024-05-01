import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='mailto:example@example.com' className='me-4 text-reset'>
            <MDBIcon icon="envelope" />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="home" className="me-3" />
                Explore Lanka
              </h6>
              <p>
               Malabe,Sri lanka
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Navigation</h6>
              <p>
                <a href='#' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  Offers
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  Packages
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="envelope" className="me-2" />
                explorelanka@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-2" /> + 01 234 567 88
              </p>
            </MDBCol>
            
            {/* Google Maps */}
            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4870766891995!2d-0.14146288422914522!3d51.506657279634315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b0a930a6a97%3A0x31dcdc353bc054d6!2sBuckingham%20Palace!5e0!3m2!1sen!2suk!4v1648058919983!5m2!1sen!2suk"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} ExploreLanka. All rights reserved.
      </div>
    </MDBFooter>
  );
}
