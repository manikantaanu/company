import React from 'react'
import '../css/about.css'
import { Component } from 'react'
import axios from 'axios';

class Careerview extends Component {

    constructor(props){
        super();

        this.state={
            career:{}
        }
     //   console.log("*****constructor*******")
     //   console.log(props);
    }

   
    render(){
      //  console.log("*****render*******")
        const {title, jobCateogry, jobType, jobLocations, Requirements} = this.state.career;

    return (<>
    <div className="container pt-5">
        
            <h3>{title}</h3><hr></hr>
            <p><strong>Job Cateogry</strong> : {jobCateogry}</p>
            <p><strong>Job Type </strong>: {jobType}</p>
            <p><strong>Job Locations </strong> : {jobLocations}</p>
            <p><strong>Requirements </strong> : {Requirements}</p>
    </div>

    </>)
}
componentDidMount(){
       
    axios.get(`http://localhost:9491/career/${this.props.match.params.careerid}`).then((apiresult) => this.setState({career:apiresult.data}))
   // console.log("*****componentDidMount*******")
}
}

export default Careerview
