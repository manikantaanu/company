import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';



// Import Information/view components
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Ecommerce from './courses/Ecommerce'
import Microsoft from './courses/MicrosoftDynamics'
import BigData from './courses/BigData'
import DataScience from './courses/DataScience'
import DevopsAutomation from './courses/DevopsAutomation'
import Pagenotfound from './Pagenotfound.js'
import CloudServices from './courses/CloudServices'
import DevopServices from './courses/DevopServices'
import FullStack from './courses/FullStack'
import Contact from './Contact'
import Career from './Careers'
import Careerview from './Careerview'



//call the Browser router object from 'react-router-dom'
//call Rote component for router path name and component calls
const Routing = () => {
        return ( < >
            <BrowserRouter > 
            
            { /* Header Component*/ }

            < Header />
                <Switch>
                                <Route exact path = "/" component = { Home }/> 
                                <Route path = "/home" component = { Home }/> 
                                <Route path = "/about" component = { About }/>
                                <Route path = "/services" component = { Services }/>
                                <Route path = "/e-commerce-enterprise-solutions" component = { Ecommerce }/>
                                <Route path = "/microsoft-dynamics" component = { Microsoft }/>
                                <Route path = "/big-data-consulting" component = { BigData }/>
                                <Route path = "/data-science" component = { DataScience }/>
                                <Route path = "/devops-and-automation" component = { DevopsAutomation }/>
                                <Route path = "/cloud-services" component = { CloudServices }/>
                                <Route path = "/devops-services" component = { DevopServices }/>
                                <Route path = "/full-stack-development" component = { FullStack }/>
                                <Route exact path = "/careers" component = { Career }/>
                                <Route path = "/careers/:careerid" component = { Careerview }/>

                                <Route path = "/contact" component = { Contact }/>
          
                                <Redirect to = "/home"/>
                                < Route component = { Pagenotfound } />
                </Switch>

                 { /* Footer Component*/ }

            <Footer />
            </BrowserRouter> </> )
        }

        export default Routing;





        //Note: In Routing components we never prepare any content,it is configuration of all functionalities.