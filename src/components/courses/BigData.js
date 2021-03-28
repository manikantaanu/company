import React from 'react'
import '../../css/courses.css'

const  BigData=()=> {
    return (
        <div className="bigdata">
            <div className="bigdata_content">
                <h3>Big Data Consulting Services</h3>
                <p>Aurum Data Solutions Inc (ADSI) has been involved in designing and implementing big data analytics solutions in Retail,
                     Manufacturing, Healthcare, Banking and Financial Services, Telecoms, etc. Our team works with a wide technology stack,
                      including <strong>Apache Hadoop, Apache Spark, Apache Storm, Apache Cassandra</strong> and other frameworks. ADSI’s big data
                       consultants are always ready to help you adopt an advanced approach to data.</p>
            </div>
            <div className="bigdata_content">
                <h3>Big Data Consulting Services from A to Z</h3>
                <ul className="items">
                    <li className="list-items">
                    <strong>Business requirements analysis and conceptual solution elaboration.</strong> We start with a detailed overview of your business requirements
                     – both urgent and forward‐thinking ones. Based on the requirement list, we deliver a conceptual solution that will meet your short‐term and long‐term goals.
                    </li>
                    <li className="list-items">
                        <strong>Architecture design and technology selection.</strong> We suggest an optimal architecture for the solution and help you select the 
                        right technology stack among numerous options.
                    </li>
                    <li className="list-items">
                    <strong>Implementation.</strong> We usually suggest an iterative approach that allows adjusting big data solutions to our customers’ business needs.
                    </li>
                    <li className="list-items">
                    <strong> Maintenance and support.</strong> We not only solve any technical issues but also proactively support the changing business requirements of our customers.
                    </li>
                </ul>
            </div>
            <div className="bigdata_content">
                <h3>We Know How to Leverage the Full Potential of Your Data</h3>
                <h5>Challenges We Solve</h5>
                <p><strong>Choosing an optimal architecture and platforms from multiple options.</strong> We help our customers not to get lost among
                     multiple possible options: cloud‐based or in‐house solution, a required platform or framework able to solve the tasks
                      ( for instance, Hadoop or Spark). We tailor our suggestions of architecture and platforms to our customers’ needs.
                       For each option, we describe all pros and cons in detail and recommend the best option.</p>
                <p><strong>Facing a high total cost of ownership.</strong>  We are laser‐focused on the possibilities to optimize an existing 
                architecture to reduce customer’s costs (such as the costs of cloud services, software license, software maintenance, data acquisition).</p>
                <p>We offer alternative options that bring both extra benefits and reduced costs.</p>
                <p><strong>Integrating various platforms and services. </strong>A big data solution always combines multiple components, as there are
                 multiple data sources. We provide our customers with a sufficient stack of compatible platforms and services needed to satisfy the business needs.</p>
            </div>
            <div className="bigdata_row">
                <h5>Technology Stack</h5>
                <div className="bigdata_left">
                    <h6>Database management:</h6>
                    <ul>
                        <li>Apache Cassandra</li>
                        <li>Azure CosmosDB</li>
                        <li>Amazon Redshift</li>
                        <li>Amazon DynamoDB</li>
                        <li>Apache Hive</li>
                        <li>Apache HBase</li>
                        <li>Apache NiFi</li>
                        <li>MongoDB</li>
                    </ul>
                    <h6>Big data processing :</h6>
                    <ul>
                        <li>Apache Kafka</li>
                        <li>Apache Spark</li>
                        <li>Apache Flink</li>
                        <li>Apache Storm</li>
                        <li>Druid</li>
                        <li>Hadoop MapReduce</li>
                    </ul>
                    <h6>Programming languages :</h6>
                    <ul>
                        <li>Java</li>
                        <li>Scala</li>
                        <li>PySpark</li>
                        <li>Python</li>
                        <li>R</li>
                    </ul>
                </div>
                <div className="bigdata_left">
                <h6>Distributed storage:</h6>
                    <ul>
                        <li>Hadoop Distributed File System</li>
                    </ul>
                <h6>Graph processing:</h6>
                    <ul>
                        <li>Apache Graph</li>
                    </ul>
                    <h6>Data management:</h6>
                    <ul>
                        <li>Apache Airflow</li>
                        <li>Talend</li>
                        <li>Informatica</li>
                        <li>Zaloni</li>
                        <li>Apache Zookeeper</li>
                        <li>Azkaban</li>
                    </ul>
                    <h6>Big data processing :</h6>
                    <ul>
                        <li>Spark’s Machine Learning Library (MLlib)</li>
                        <li>Amazon Machine Learning</li>
                        <li>Azure Machine Learning Studio</li>
                        <li>TensorFlow</li>
                        <li>Theano</li>
                        <li>Torch</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default  BigData
