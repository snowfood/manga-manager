import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";

function BasicTable({tableType, mangas}) {
    const [currManga, setCurrManga] = useState(0);
    const[formName, setFormName] = useState("");
    const[formLink, setFormLink] = useState("");
    const[formRating, setFormRating] = useState(0);
    const[formCurrentlyReading, setFormCurrentlyReading] = useState(false);
    const[formBookmarked, setFormBookmarked] = useState(false);
    const [show, setShow] = useState(false);

    if (tableType=="read"){
        const readMangas = [];

        mangas.map((manga)=>{
            if (manga.completed && !manga.currently_reading){
                readMangas.push(manga);
            }
        })
        mangas = readMangas;
    }
    else if (tableType=="currentlyReading"){
        const currMangas = [];

        mangas.map((manga)=>{
            if (manga.currently_reading){
                currMangas.push(manga);
            }
        })
        mangas = currMangas;

    }

    
    const handleClose = () => {
        setShow(false);

    };
    const handleCloseChanged = () => {
        setShow(false);

        axios.patch(`http://localhost:8000/api/mangas/${currManga}/`, {
            "name": formName,
            "url": formLink,
            "currently_reading": formCurrentlyReading,
            "bookmarked": formBookmarked
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
        console.log("edit");
        setCurrManga(id);
    }

    useEffect((()=>{
        console.log("table is", tableType);
        console.log("undef", (mangas[currManga-1]));
        console.log("length", (mangas.length));

        setFormName((mangas[currManga-1] == undefined || mangas.length == 0)? "":mangas[currManga-1].name);
        setFormLink((mangas[currManga-1] == undefined || mangas.length == 0)? "":mangas[currManga-1].url);
        setFormRating((mangas[currManga-1] == undefined || mangas.length == 0)? 0:mangas[currManga-1].rating);
        setFormCurrentlyReading((mangas[currManga-1] == undefined || mangas.length == 0)? false :mangas[currManga-1].currently_reading);
        setFormBookmarked((mangas[currManga-1] == undefined || mangas.length == 0)? false :mangas[currManga-1].bookmarked);
        (mangas[currManga-1] == undefined || mangas.length == 0)? setShow(false) :setShow(true);
        
    }),[currManga]);

    
  return (
        <div className="table">
            {tableType=="currentlyReading"? (<h1>Currently Reading Manga</h1>): (<h1>Read Manga</h1>)}
            
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Newest Chapter</th>
                    <th>Rating</th>
                    <th>Link</th>
                    <th>Edit</th>
                </tr>
                </thead>
                
                <tbody>
                    {mangas.map(( manga)=>{
                        return(
                            <tr className='table-row'>
                                    <td>{manga.id}</td>
                                    <td>{manga.name}</td>
                                    <td>{manga.newest_chapter}</td>
                                    <td>{manga.rating[0]}</td>
                                    <td><Button target="_blank" href={manga.url}>Read Now</Button></td>
                                    <td><Button variant="secondary" onClick={()=>(handleShow(manga.id))}>Edit</Button></td>
                            </tr>)     
                    })}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                <Modal.Title>{(mangas[currManga-1] == undefined || mangas.length == 0)? "Loading": mangas[currManga-1].name}</Modal.Title>
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
                            <Form.Check type="checkbox" checked={formCurrentlyReading} onChange={(e)=>(setFormCurrentlyReading(e.target.checked))} label="Currently Reading" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBookmarked">
                            <Form.Check type="checkbox" checked={formBookmarked} onChange={(e)=>(setFormBookmarked(e.target.checked))} label="Bookmarked" />
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

export default BasicTable;