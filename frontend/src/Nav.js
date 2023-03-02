import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState} from 'react';
import axios from "axios";

function BasicNav() {
  const [show, setShow] = useState(false);

  const[formName, setFormName] = useState("");
  const[formLink, setFormLink] = useState("");
  const[formRating, setFormRating] = useState(0);

  const handleClose = () => {
    setShow(false);

  };
  const handleCloseChanged = () => {
    setShow(false);

    axios.put(`http://localhost:8000/api/mangas/`, {
        "name": formName,
        "url": formLink
    })
    .then(response => {
        console.log(response);
        window.location.reload(false);
    })
    .catch(error => {
        console.log(error);
    });
    
  };
  const handleShow = (id) => {
    setShow(true)
  }
  return (
    <div>
      <Nav
      activeKey="/home"
      className="justify-content-between container nav-bar"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Image className="logo" src="naruto-logo.png"></Image>
        {/* <Nav.Link href="/home">Estelle's Manga Manager</Nav.Link> */}
      </Nav.Item>
      <div className='nav-links'>
        <Nav.Item>
            <Button className ='nav-button' onClick={handleShow}>
                Add Manga
                {/* <Nav.Link eventKey="link-1">Add a Manga</Nav.Link> */}
            </Button>
            
        </Nav.Item>
        <Nav.Item>
            <Button target="_blank" href="http://localhost:8000/admin/" className ='nav-button'>Settings</Button>
            {/* <Nav.Link eventKey="link-2">Edit a Manga</Nav.Link> */}
        </Nav.Item>
      </div>
    </Nav>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                <Modal.Title>Add a manga</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={(e)=>(setFormName(e.target.value))} value={formName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" onChange={(e)=>(setFormLink(e.target.value))} value={formLink}  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formRating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" onChange={(e)=>(setFormRating(e.target.value))} value={formRating}  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="FormCurrentlyReading">
                            <Form.Check type="checkbox" onChange={(e)=>(setFormRating(e.target.value))}label="Currently Reading" />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleCloseChanged}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
    </div>
    
    
  );
}

export default BasicNav;