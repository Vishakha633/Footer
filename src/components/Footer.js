import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { FaPhoneAlt, FaEnvelope, FaPrint } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import {Link} from 'react-router-dom'
//5d54b0
function Footer() {
    return (
        <div style={{ backgroundImage: "url(/public/Background.jpg)"}}>
            <div style={{ backgroundColor: '#5d54b0' }}> 
                <div className='container'>
                    <div className='row py-5 text-white'>
                        <div className='col-md-4 col-sm-12'>
                            <h4 className='text-warning'>CodeArena</h4>
                            <p>In this section we should write about our company
                                to introduce your company or something else.
                            </p>
                        </div>
                        <div className='col-md-3 col-sm-12'>
                            <h4 className='text-warning'>Company</h4>
                            <p><Link className="footer-item text-white" to="/about" style={{ cursor: 'pointer', textDecoration: 'none' }}>About Us</Link></p>
                            <p><Link className="footer-item text-white" to="/about" style={{ cursor: 'pointer', textDecoration: 'none' }}>Careers</Link></p>
                            <p><Link className="footer-item text-white" to="/services" style={{ cursor: 'pointer', textDecoration: 'none' }}>Our Team</Link></p>
                            <p><Link className="footer-item text-white" to="/contact us" style={{ cursor: 'pointer', textDecoration: 'none' }}>Contact Us</Link></p>
                            <p><Link className="footer-item text-white" to="/privacy" style={{ cursor: 'pointer', textDecoration: 'none' }}>Privacy Policy</Link></p>
                        </div>
                        {/* <div className='col-md-3 col-sm-12'>
                            <h4 className='text-warning'>Useful Links</h4>
                            <p style={{ cursor: 'pointer' }}>Sitemap</p>
                            <p style={{ cursor: 'pointer' }}>Shipping Rates</p>
                            <p style={{ cursor: 'pointer' }}>Affililat Program</p>
                            <p style={{ cursor: 'pointer' }}>Affililat Program</p>
                        </div> */}
                        <div className='col-md-3 col-sm-12'>
                            <h4 className='text-warning'>Address</h4>
                            <FiMapPin className='me-2' />Vishakha <br />
                            <FaPhoneAlt className='me-2' />9950980633 <br />
                            <FaEnvelope className='me-2' />vishakhav043@gmail.com <br />
                            <FaPrint className='me-2' />+9560438596 <br />
                        </div>
                    </div>
                    <p className='text-white pb-5' >@copyright Code With Yourself 2023</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
