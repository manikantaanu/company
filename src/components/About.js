import React from 'react'
import aboutImg from '../images/About.png'
//import Button from 'react-bootstrap/Button';
import '../css/about.css'

//About Component
const About =()=> 
    {
        return(<>
        <div className="about">
                    <h2 className="about_title">About us</h2>
                <div className="about_maincontent">
                    <div className="about_inner">
                    <img src={aboutImg} className="w-100"  alt="Graycolor"/>
                    </div>
                    <div className="about_inner">
                        
                        <h3>Helping Your Business get value from data</h3>
                        <p>Develop Your Path to Success</p>
                        <hr></hr>
                        <p>At Araminds, our business is helping your business succeed. 
                            Whether you need help with an existing Big Data set up or build one from scratch, 
                            we’ve got programs and services you need to make your business rock.</p>
                        <p>With over 20 years of experience in the IT services industry, we have seen it all. 
                            From latest technologies to some of the niche ones, integrating legacy systems with 
                            state of art technologies, we have experts to handle your needs. Our focus is finding 
                            areas where your business could be more productive and successful and then helping you 
                            develop the path to get it there.</p>
                    </div>
                </div>
                <div className="services_content">
                        <div className="services-item">
                            <h4>Big Data Solutions</h4>
                            <p>We offer a variety of professional services that
                                        help you achieve your business goals. Do you need help with 
                                        building a comprehensive big data stratagy to get ahead?</p>
                        </div>
                        <div className="services-item">
                            <h4>Data Analytics and Visualization</h4>
                            <p>Our dynamic programs cover businesses in a variety of stages and sizes. Whether you’re just 
                                        starting out, have too many hats as a SME owner, need high-level executive mentoring or need 
                                        marketing tips that fit your schedule, our programs fit the bill.</p>
                        </div>
                        <div className="services-item">
                            <h4>BI Consulting</h4>
                            <p>Where do we deliver the most? In our client’s results. We’ve worked with companies from 
                                        single-person startups to Fortune 500 executives and everything in between. We provide a 
                                        guarantee that if you follow our plan and don’t see amazing results, you don’t pay.</p>
                        </div> 
                    </div>
        </div>
       
                
            </>);
    }

        export default About