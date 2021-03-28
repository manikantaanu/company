import React from 'react'
import slide1 from '../images/Slides-1.jpg';
import slide2 from '../images/Slides-2.jpg';
import slide3 from '../images/Slides-3.jpg';
import aboutImg from '../images/About.png';
//import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'
import '../css/home.css'
import { Link } from 'react-router-dom';
import Devops from '../images/Dev-Ops.png'
import BigData from '../images/Big Data_Hadoop.png'
import Cloudservices from '../images/Cloud Services.png'
import Ecommerce from '../images/E-Commerce.png'
import Microsoft from '../images/Microsoft Services.png'
import Left from '../images/process-dots-left.png'
import Right from '../images/process-dots-right.png'


 const Home=()=> {
    return (<>
 
            <div className="home">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'></div>
                
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="home_container">
                    <h2 className="home_title">About us</h2>
                <div className="home_about">
                <div className="home_inner">
                    <img src={aboutImg} className="w-100"  alt="AboutImage"/>
                </div>
                    <div className="home_inner">
                        <p>Determined to create something better, our company was formed to help businesses reach
                             that next level without losing their personality. Some of the best visionaries in the 
                             world created a dynamic company of consultants who were able to on and conquer the most 
                             complex IT Challenges.</p>
                        <p>We believe that creating growth is only helpful if the company is able to continue. 
                            Destroying a company’s spirit in the interest of growth only leads to a failed enterprise.</p>
                        <p>Because of this value, we’re always happy to go above and beyond for your company, reaching out 
                            to our extensive network of contact to develop the perfect program so your company can realize 
                            an amazing level of dynamic growth.</p>
                        <Link className="about_btn" to="/about"> Get Started</Link>
                    </div>    
                </div>
                <h2 className="home_title">Our Process</h2>
                <div className="home_services">
                    <div className="home_inner">
                        <h5> A Different Approach</h5>
                        <p>At Aurum, we believe the spirit under which your company was formed is a vital part of its future growth.
                             We appreciate the way your business works and will blend in to get things done. We don’t get our
                              testimonials by asking our clients for them – we wait for them to develop organically in emails,
                               commentary or blog posts.</p>
                     </div>
                     <div className="home_inner">
                    <img src={Right} className="w-100 Right-dots"  alt="RightDots"/>
                    </div>
                </div>
                <div className="home_services">
                    <div className="home_inner">
                    <img src={Left} className="w-100 left-dots"  alt="LeftDots"/>
                    </div>
                    <div className="home_inner">
                        <h5> Nothing but Excellence</h5>
                        <p>Though our services are divided into various  categories, we treat all our clients as individuals and
                             don’t think a one-sized-fits-all solution will work. We’ll help you develop a customized plan to your
                              unique position and challenges</p>
                     </div>
                </div>
                <div className="home_services">
                    <div className="home_inner">
                        <h5> Quality Over Quantity</h5>
                        <p>Because we have so many brilliant consultants in a wide variety of industries, we’ve been able to pick
                             the very best advice for re-inventing your business into a dynamic, thriving enterprise where people
                              are lining up to get in and share the experience. If you’ve dreamed of making your business extraordinary,
                               our Business Renovation Program will take you there.</p>
                        <p>We believe in honoring the unique personalities, culture and market that has grown your business so far, 
                            and hire only the very best consultants to help you take your business into the future with success beyond 
                            your wildest dreams.</p>
                        <p>Although you can tell a lot about a business or service by looking at its website, the best way to see what 
                            they can do is by looking through their customer’s eyes and seeing what they’ve accomplished.</p>
                            <ul className="items">
                                <li className="list-items">Optimize Performance </li> 
                                <li className="list-items">Contract Consultants </li> 
                                <li className="list-items">Costs in Advance </li> 
                                <li className="list-items">Technology Planning </li>  
                            </ul>
                         </div>
                         <div className="home_inner">
                        <p></p>
                        </div>
                </div>
                    <h2 className="home_title">Our Services</h2>
                <div className="service_content">
                        
                        <div className="service-item">
                            <img src={Devops} width="200"  alt="Graycolor"/>
                            <h4>Dev-Ops</h4>
                            <p>As the Dev Ops space is growing, our army of professionals can help you stay on top
                                 of the new technologies and solutions in this space.</p>
                        </div>
                        <div className="service-item">
                            <img src={BigData} width="180"  alt="Graycolor"/>
                            <h4>Big Data/Hadoop</h4>
                            <p>With quintillions of data generated every day, it is important to have a robust Big
                                 data platform. Our experienced team can architect and implement a solution that gives you an edge.</p>
                        </div>
                        <div className="service-item">
                            <img src={aboutImg} width="200"  alt="Graycolor"/>
                            <h4>Analytics</h4>
                            <p>Our wide-ranging analytics, data and engineering expertise produces actionable insights and unified, 
                                cross-channel reporting that powers performance.</p>
                        </div> 
                        <div className="service-item">
                            <img src={Cloudservices} width="280"  alt="Graycolor"/>
                            <h4>Cloud Services</h4>
                            <p>The right partner can accelerate your company’s digital transformation by moving to cloud and empower 
                                your business to stay ahead of the competition</p>
                        </div>
                        <div className="service-item">
                            <img src={Ecommerce} width="180"  alt="Graycolor"/>
                            <h4>E-Commerce</h4>
                            <p>With quintillions of data generated every day, it is important to have a robust Big data platform. 
                                Our experienced team can architect and implement a solution that gives you an edge.</p>
                        </div>
                        <div className="service-item">
                            <img src={Microsoft} width="180"  alt="Graycolor"/>
                            <h4>Microsoft Services</h4>
                            <p>With our vast experience across various Microsoft products, we can help you architect and develop 
                                best in class solutions.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </> )
}

export default  Home