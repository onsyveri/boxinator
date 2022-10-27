import React, { useEffect } from 'react';
import { usePackage } from "./../../../context/PackageContext"
import { fetchCompletedPackage } from '../../../api/PackageService';
import { Col, Container,Row } from 'react-bootstrap';
import './debugCompleted.css'
import { useState } from 'react';

const DebugCompleted = () => {

  const [ packages, setPackage ] = useState(null);


   // GET all completed packages
   useEffect(() => {

      const init = async () => {
          const packages = await fetchCompletedPackage();
          setPackage(packages);
      };

      init();
    
}, []);

if (!packages) return null;


  return (
    <div>
      <h1 id='allPackTitle'>All the completed packages</h1>

    <Container>

    {packages.shipments && packages.shipments.map(({
        id, receiver_name, color, weight, country, date, totalSum, status}) => (
          <Row  key={id} className="justify-content-md-center"> 
         
           <Col id='text-t'>{receiver_name}</Col>
           <Col id='text-t'>{weight}</Col>
           <Col id='text-t'>{color}</Col>
           <Col id='text-t'>{country}</Col>
           <Col id='text-t'>{totalSum}</Col> 
           <Col id='text-t'>{status}</Col> 
          </Row>
      ))}
    
     
     
    </Container>

 

     
    </div>
  )

}

export default DebugCompleted