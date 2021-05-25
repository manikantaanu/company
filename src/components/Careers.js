import React from 'react'
import carres from '../images/careers.jpg'
import '../css/about.css'
import { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class Careers extends Component {

    constructor(props){
        super();

        this.state={
            career:[]
        }
    //   console.log(props);
    }

    handlegetData=async()=> {
            await axios.get('http://localhost:9491/career').then((apiresult) => this.setState({career:apiresult.data}))
    }
    render(){
        const career = this.state.career;
    return (
        <div className="carrers">
            <h3 className="carrerTitle" style={{textAlign:"center"}}>Carrer</h3>
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
                <h3 className="jobpost">Current Job Postings</h3>
            <div className="carrer-grid">
                
                {
                    career.map((res,index) => {
                        return(<div key={index} className="carrer-gridinner">
                        <h4><Link to={`${this.props.match.url}/${res.id}`}> {res.title}</Link>
                       </h4>
                        <p>{res.jobCateogry}</p>
                        <p>{res.jobLocations}</p>
                        </div>)
                    })
                }
            
                
            </div>
        </div>

    )
}
componentDidMount(){
       
    this.handlegetData();

}
}

export default Careers
