import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

const Updates = ({mangas}) => {

    const markAsRead = (manga) => {
        axios.patch(`http://localhost:8000/api/mangas/${manga.id}/`, {
            "last_read_chapter": manga.newest_chapter
        })
        .then(response => {
            console.log(response);
            window.location.reload(false);
        })
        .catch(error => {
            console.log(error);
        });

    };
    return ( 
       <div className='mangaCard'>
        <h1>New Updates</h1>
        {mangas.map((manga)=>{
            if (manga.newest_chapter >manga.last_read_chapter && manga.currently_reading){
                return (
                    <Card className='update-card'>
                    <Card.Img variant="top" src={manga.img_url} />
                    <Card.Body>
                        <Card.Title>{manga.name}</Card.Title>
                        <Button className="update-btn" target="_blank" href={manga.url}variant="primary">Read chapter {manga.last_read_chapter+1}</Button>
                        <Button className="update-btn" onClick={()=>markAsRead(manga)}variant='secondary'>Mark As Read</Button>
                    </Card.Body>
                </Card>
                )
            }
        })}
       

       </div>
        
     );
}
 
export default Updates;