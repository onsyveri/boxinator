import {Modal } from 'react-bootstrap'
import './packagemodal.css';
import Cart from '../Form/TotalAmount';

import PackageFormGuest from '../Form/PackageFormGuest';

const PackageModalGuest = ({setIsOpen, countries}) => {
const handleClose = () => setIsOpen(false);



return (

  <Modal show={setIsOpen} onHide={handleClose}>

<Modal.Header>
      <Modal.Title id="modal-title">Who is the lucky receiver?</Modal.Title>
      <button id="modal-close-button" onClick={handleClose}>X</button>
    </Modal.Header>
    <Modal.Body id="modal-body">
     <PackageFormGuest/>

 

    </Modal.Body>
    <Modal.Footer>
       <Cart/>
    </Modal.Footer>

  </Modal>
    
    
    )}

export default PackageModalGuest;
