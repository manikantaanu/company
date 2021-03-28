import React from 'react'
import AWS from '../../images/Aws.png'
import MicrosoftAzure from '../../images/azure.png'
import '../../css/courses.css'

function CloudServices() {
    return (
        <div className="cloud">
        <div className="cloud_content">
            <h3>Cloud Services</h3>
            <p>Araminds is a one-stop shop leader in Cloud solutions</p>
            <p>We help clients unlock the potential of the Cloud in to order to fuel business growth, 
                gain new insights, open new opportunities, and streamline new models for creating richer customer experiences.</p>
        </div>
        <div className="cloud_content">
            <h3>Cloud Architecture Consulting</h3>
            <ul className="items">
                <li className="list-items">
                    Cloud Strategy Assessment</li>
                <li className="list-items">
                    Application Selection and Configuration</li>
                <li className="list-items">
                    Financial Assessment of Migrating to the Cloud (including ROI and TCO)</li>
                </ul>
         </div>
        <div className="cloud_content">
            <h3>Cloud Application Development</h3>
            <ul className="items">
                <li className="list-items">
                    Cloud Design and Solution Architecture</li>
                <li className="list-items">
                    Proof of Concept for Cloud Solutions</li>
                <li className="list-items">
                    Development of Hybrid Apps Working both On-premise and, in the Cloud.</li>
                <li className="list-items">
                    Cloud Application Feature Enhancements and Upgrades.</li>
                </ul>
         </div>
        <div className="cloud_content">
            <h3>Cloud Migration and Deployment</h3>
            <ul className="items">
                <li className="list-items">
                    Application Assessments</li>
                <li className="list-items">
                    Extending Certain Aspects of On-premise Applications to the Cloud</li>
                <li className="list-items">
                    Enabling Cloud Storage for On-premise Applications</li>
                <li className="list-items">
                    Proof of Concept for Application Migration</li>
                <li className="list-items">
                    Application Migration</li>
                </ul>
        </div>
        <div className="cloud_content">
            <h3>Cloud Application Testing</h3>
            <ul className="items">
                <li className="list-items">
                    Customization and configuration focused testing</li>
                <li className="list-items">
                    Ability to perform both manual and automated testing (Selenium, Provar) as well as built-in/related apps</li>
                <li className="list-items">
                    Multiplexing administrative, QC and QA capabilities in order to set and accommodate a Cloud solution.</li>
                </ul>
        </div>
        <div className="cloud_content">
            <h3>Cloud DevOps</h3>
            <p>ADSI’s DevOps expertise in provisioning, operating, and managing distributed application systems enables clients
                 to launch new apps and services quickly, apply continuous improvement methodologies, improve performance and
                  security, and significantly reduce cost.</p>
        </div>
        <div className="cloud_content">
            <h3>CLOUD PLATFORMS</h3>
            <img className="azure" src={MicrosoftAzure} alt="Microsoft-Azure logo"/>
            <ul className="items">
                <li className="list-items">
                    Cloud Services (website, web roles, worker roles), Virtual Machine, Blob Storage</li>
                <li className="list-items">
                    Redis Cache Service</li>
                <li className="list-items">
                    Azure Database, DocumentDB</li>
                <li className="list-items">
                    Microsoft Visual Studio expertise</li>
                <li className="list-items">
                    Web Jobs</li>
                <li className="list-items">
                    ADAL, Azure Service Bus</li>
                </ul>
            <img src={AWS} alt="Aws logo"/>
            <ul className="items">
                <li className="list-items">
                    AWS EC2</li>
                <li className="list-items">
                    S3</li>
                <li className="list-items">
                    CloudFront</li>
                <li className="list-items">
                    Redshift</li>
                <li className="list-items">
                    Elastic Load Balancing</li>
                <li className="list-items">
                    RDS</li>
                <li className="list-items">
                    Lambda</li>
                </ul>
        </div>
    </div>
    )
}

export default CloudServices
