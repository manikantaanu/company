import React from 'react'
import django from '../../images/django.png'
import larvel from '../../images/larvel logo.jpg'
import php  from '../../images/php.png'
import java from '../../images/java logo.jpg'
import net from '../../images/netlogo.png'
import lumen from '../../images/lumen.png'
import spring from '../../images/spring_framework.png'


function FullStack() {
    return (
        <div className="fullstack">
            <div className="fullstack_content">
                <h3>Full Stack Development</h3>
                <p>With a deep expertise in full-cycle development, we are extremely competent in building unmatched websites.</p>
                <ul className="items">
                    <li className="list-items">
                        UI/UX
                    </li>
                    <li className="list-items">
                        Front End
                    </li>
                    <li className="list-items">
                        Multi-tier API
                    </li>
                    <li className="list-items">
                        Backend
                    </li>
                    <li className="list-items">
                        Quality Assurance
                    </li>
                </ul>
        </div>
        <div className="fullstack_content">
            <h3>UI/UX</h3>
            <p>A superior UI and beautiful, intuitive designs can lead your business to productivity improvements</p>
            <ul className="items">
                <li className="list-items">
                    Interactive UI
                </li> 
            </ul>
            <p>Our interactive UI elements ensure that your users get an amazing experience, not just an informational view.</p>
            <ul className="items">
                <li className="list-items">
                    Surpassing UX
                </li> 
            </ul>
            <p>Users crave for a friendly website. And, that is exactly what we deliver to increase customer’s satisfaction.</p>
            <ul className="items">
                <li className="list-items">
                    KPI Led Design
                </li> 
            </ul>
            <p>Evaluate your success at achieving the major business objectives with our appealing KPI Lead Designs.</p>
            <ul className="items">
                <li className="list-items">
                    Balanced UI/UX
                </li> 
            </ul>
            <p>We effectively keep the balance between UI and UX to provide the maximum value to your website</p>
        </div>
        <div className="fullstack_content">
                <h3>Front End Development</h3>
                <ul className="items">
                    <li className="list-items">
                        Design-Centric Front-End Development
                    </li>
                </ul>
                <p>It's mandated for your website to have a great front-end design to deliver an enhanced
                     user experience. Hence, we develop interfaces using various interactive technologies.</p>
                <div className="images">
                    {/* front end images left */}
                </div>
        </div>
        <div className="fullstack_content">
                <h3>Multi-tier API Development</h3>
                <p>Streamline any of the API layers you want separately without affecting the other layers.
                     We help you individually scale and edit each layer with our Multi-Tier API Development.</p>
                <img src={larvel} width="150" alt="larvel"/>
                <p>Laravel is an open-source PHP web framework which is free. It works like a toolkit for 
                    the developers that helps them create beautiful and fully functional web applications.
                     Anyone who needs a simple yet stunning web application, should prefer it.</p>
                <p>We serve standard and future-proof development solutions that make your online presence irresistible.</p>
                <img src={django}  alt="django"/>
                <p>Django is a free, open-source web framework which is written in Python. It helps developers
                     create web applications easily and quickly while following the model-view-template architectural pattern.</p>
                <p>We develop business-centric websites as per the customer's requirements and specifications.</p>
        </div>
        <div className="fullstack_content">
                <h3>Backend Development</h3>
                <p>With ADSI at your side, never compromise with the unseen part of your website - called back-end, APIs and libraries.</p>
                <div className="images">
                    {/* front end images left */}
                    <div className="inner-images">
                    <p><img src={php} width="50" alt=""/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PHP</p>
                    <p><img src={django} width="50" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PYTHON</p>
                    <p><img src={java} width="50" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAVA</p>
                    <p><img src={net} width="50" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.NET</p>
                    <p><img src={lumen} width="50" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LUMEN</p>
                    <p><img src={spring} width="50" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPRING</p>
                    </div>
                </div>
        </div>
        <div className="fullstack_content">
            <h3>Testing</h3>
            <p>Testing that Ensures Absolute Security</p>
            <p>From protecting your innovative ideas to strengthening up your project’s security, we take care of just everything.
                 And, to make sure the absolute security standards, our quality analysts go through the testing of every segment.</p>
            <ul className="items">
                <li className="list-items">SMOKE TESTING </li> 
                <li className="list-items">API TESTING </li> 
                <li className="list-items">FUNCTIONAL TESTING </li> 
                <li className="list-items">COMPATIBILITY TESTING </li> 
                <li className="list-items">LOAD & PERFORMANCE TESTING </li> 
                <li className="list-items">SANITY TESTING </li> 
                <li className="list-items">USABILITY TESTING </li> 
                <li className="list-items">REGRESSION TESTING </li> 
                <li className="list-items">SECURITY TESTING</li>  
            </ul>
        </div>
        
    </div>
    )
}

export default FullStack
