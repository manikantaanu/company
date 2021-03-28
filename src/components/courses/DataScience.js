import React from 'react'
import spark from'../../images/Apache_Spark_logo.svg.png'
import Mesos from '../../images/apache-mesos-logo.jpg'
import Akka from '../../images/Akka_logo.svg.png'
import Cassendra from '../../images/Cassandra_logo.svg.png'
import kafka from '../../images/kafka-training-in-brighton-apache-kafka-training-1576498761.jpeg'

const DataScience=()=> {
    return (
        <div className="datascience">
            <div className="datascience_content">
                <h3>Data Science</h3>
                <h6>Build intelligent products</h6>
                <p>Data Science enables the organization to identify patterns in large volumes of fast‐moving structured
                     and unstructured data. It helps the organization to gain decision‐making capabilities, achieve their
                      business outcomes and generate new revenue streams.</p>
                <p> Data Science alone will not generate value for the business. The uncovered relationships need to be
                     evolved and embedded in your products. ADSI specializes in end to end process of commercializing 
                     data science that creates highly successful businesses.</p>
                <p>The most important aspect of data science is the understanding of a domain. Our team of world‐class
                     data scientists, including PhDs in specific domains (Pharma, Healthcare, Chemical industries),
                      can help you uncover hidden value in your data and key business drivers to help you achieve
                       most out of the data you have. We offer complete data science services from building the roadmap, 
                       architect the process and technology and implement the architecture. With all these, we deliver the business
                        value ‐ increase revenue, maximize utility and reduce costs.</p>
                <p>We adopt advanced Machine Learning and Artificial Intelligence solutions to enable a quantum leap in your automated 
                    operations, risk management, and personalized customer service.</p>
            </div>
            <div className="datascience_content">
            <h3>Our Data Science Lifecycle includes these steps:</h3>
            <ul className="items">
                <li className="list-items">
                    <h4> Data Acquisition</h4>
                        Collected data from various sources in a variety of formats, ranging from unstructured data to structured XML documents</li>
                <li className="list-items">
                    <h4>Data Analysis</h4>
                        This involves applying analytics techniques to identify key predictors and descriptors, which can then be used in an algorithm to identify leading trends</li>
                <li className="list-items">
                    <h4>Data Transformation</h4>
                        Analyzed data can be transformed in accordance with business rules to discern correlations and generate possible resolutions</li>
                <li className="list-items">
                    <h4>Modeling & visualizations</h4>
                        Performing analysis of data leveraging different modeling techniques to answer business‐critical challenges.</li>
                <li className="list-items">
                    <h4>Maintenance and Support</h4>
                        This process can be further extended through supporting to automate failure resolution proactively.</li>
            </ul>
            
        </div>
            <div className="datascience_content">
                <h3>Artificial Intelligence & Machine Learning Solution</h3>
                <p>AI and machine learning are coming into their own amid a data explosion. Machine learning is contingent on huge amounts 
                    of data to train the algorithms so that they can adjust and improve. Organizations today have a mountain of data ‐ and 
                    will continue to generate more and more. With AI and ML, it’s possible to use that data to get value not possible with 
                    human analysis alone, leading to improved effectiveness and productivity with new insights and automation.</p>
                <p>ADSI believes that AI and machine learning are going to play a critical role in your ability to get answers from your
                     machine data. Hence, we allow you to complement your expertise of your organization and your data with AI and machine
                      learning for enhanced effectiveness and productivity, across industries, use cases, and skill set.</p>
            </div>
            <div className="datascience_content">
                <h3>Our Data Science service with AI and ML enable organizations:</h3>
                <ul className="items">
                    <li className="list-items">
                        Build Scalable and highly accurate product demand forecast
                    </li>
                    <li className="list-items">
                        Identify the most valuable customer segment
                    </li>
                    <li className="list-items">
                        Recommends products to cross‐sell and upsell
                    </li>
                    <li className="list-items">
                        Better collaborate with peers
                    </li>
                    <li className="list-items">
                        Avoid costly downtime and improve customer satisfaction
                    </li>
                    <li className="list-items">
                        Dissolve IT silos and disjointed responses
                    </li>
                    <li className="list-items">
                        Eliminate tedious and manual tasks
                    </li>
                    <li className="list-items">
                        Predict and optimize maintenance to reduce servicing costs
                    </li>
                </ul>
                </div>
            <div className="ecommerce_content">
                <h3>Tools and Technologies</h3>
                <p>At ADSI, we build and operate fast data using an emerging architecture “SMACK” 
                    stack (Spark, Mesosphere, Akka, Cassandra, and Kafka). This enables enterprises 
                    to easily access tremendous amounts of data ‐ businesses extract value from data and build
                     modern applications that serve customers with personalized services, in real time, and at scale.</p>
                <div className="ecommerce_grid">
                        <div className="grid-item">
                            <img src={spark}   alt="spark"/>
                            <p>Fast and general engine for distributed, large‐scale data processing, machine learning, SQL, and graph computation.</p>
                        </div>
                        <div className="grid-item">
                            <img src={Mesos}  alt="Graycolor"/>
                            <p>Cluster resource management system that provides efficient resource isolation for running data services and containerized microservices.</p>
                        </div>
                        <div className="grid-item">
                            <img src={Akka}   alt="Graycolor"/>
                            <p>A toolkit and runtime for building highly concurrent, distributed, and resilient message‐driven applications on the JVM</p>
                        </div>
                        <div className="grid-item">
                            <img src={Cassendra}   alt="Graycolor"/>
                            <p>A distributed, highly available database designed to handle large amounts of data across multiple data centers.</p>
                        </div>
                        <div className="grid-item">
                            <img src={kafka} alt="Graycolor"/>
                            <p>A distributed, highly available messaging system to ensure millions of events per second arecaptured through connected endpoints with no loss</p>
                        </div>
                </div>
                </div>
        </div>
    )
}

export default  DataScience
