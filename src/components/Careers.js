import React from 'react'
import carres from '../images/careers.jpg'
import '../css/about.css'

function Careers() {
    return (
        <div className="carrers">
            <h3 className="carrerTitle" style={{textAlign:"center"}}>Carrers</h3>
        <div className="carrers_content">
                <div className="carrers-inner">
                    <img src={carres} className="w-100"  alt="carrerImage"/>
                    </div>
                    <div className="carrers-inner">
                        <p>At Araminds, we believe the spirit under which your company was formed is a vital part of its
                             future growth. We appreciate the way your business works and will blend in to get things done.
                              We don’t get our testimonials by asking our clients for them – we wait for them to develop
                               organically in emails, commentary or blog posts.</p>
                    </div>
                </div>
            </div>
    )
}

export default Careers
