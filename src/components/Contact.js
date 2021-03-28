import React, { Component } from 'react'
import '../css/contact.css'
import ContactImg from '../images/contact-us.png'
//import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

class LalauceForm extends Component {

    static defaultProps = {
        center: {
          lat: 17.36,
          lng: 78.55
        },
        zoom: 11
      };

    render() {
    return (
        <div className="contact">
            <div className="contact_content">
                <h3>Get In Touch With Us</h3>
                <p>Araminds is a Global IT Services and Solutions company offering Strategic Resources,
                     Enterprise Applications and Technology Solutions. Aurum’s specialized Technology Solution offerings
                      include Mobility, Outsourced Product Development, Business Intelligence and Big Data Analytics,
                       DevOps, IoT, Testing Services, Cloud Services and L2/L3 Support Services. We love meeting new people! 
                       If you have a query for us – you can reach us by email and we’d be glad to discuss over a cup of 
                       cappuccino, the value we can provide. We’re passionate about what we do and we’re happy to find a
                        solution for your technical needs</p>
                <p>Please use the contact form below, if you have any general questions or requests about our services.</p>
                <p>We will try our best to respond back to you within 24 hours.</p>
            </div>
            <div className="contact_form">
                <div className="form_inner">
                    <img src={ContactImg} width="100%"  alt="contactImage"/>
                </div>
                <div className="form_inner">
                    <div className="form" >
                        <form>
                            <div className="form-group">
                                <label className="form-label"></label>
                                <input type="text" placeholder="Name"  className="form-control" />
                            </div>

                            <div className="form-group">
                                <label className="form-label"></label>
                                <input type="email" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form-label"></label>
                                <input type="text" placeholder="Phone" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label className="form-label"></label>
                                <input type="text" placeholder="Subject" className="form-control"/>
                            </div>

                            <div className="form-group">
                                    <label className="form-label"></label>
                                    <input type="text" placeholder="Your Message" className="form-control"/>
                            </div>
                            <button className="btn btn-primary" >Submit form</button>
                        </form>
                    </div>
                </div> 
            </div>
            <div className="address_content">
                        <div className="address-item">
                            <RoomIcon style={{ fontSize: 60 }}/>
                            <h4>Visit Here</h4>
                            <p>Srija Enclave,Flat no 101, Road no 2, Alkapuri , LB Nagar</p>
                        </div>
                        <div className="address-item">
                            <MailIcon style={{ fontSize: 60 }}/>
                            <h4>Mail Here</h4>
                            <p><a href="mailto:info@araminds.com?Subject=Mail from Araminds&body=Dear Araminds Team Contact us :9866655540" target="_top">info@araminds.com</a></p>
                        </div>
                        <div className="address-item">
                            <CallIcon style={{ fontSize: 60 }}/>
                            <h4>Call Here</h4>
                            <p> +91 9000455540<br/> +91 9866655540</p>
                        </div> 
                    </div>
           {/*  <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDxvuYE6tz2KeiXfZq0rtIhejyZ3cnVjCc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={17.36303742804976}
            lng={78.55379123231317}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>*/}
        </div>
    )
}
}

export default LalauceForm 
