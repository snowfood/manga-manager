import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Updates = () => {
    return ( 
       <div className='mangaCard'>
        <h1>New Updates</h1>
        <Card style={{  }}>
            <Card.Img variant="top" src="yona.jpg" />
            <Card.Body>
                <Card.Title>Akatsuki No Yona</Card.Title>
                <Button variant="primary">Read chapter 29</Button>
            </Card.Body>
        </Card>

       </div>
        
     );
}
 
export default Updates;