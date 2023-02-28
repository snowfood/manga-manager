import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

function BasicNav() {
  return (
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
            <Button className ='nav-button'>
                Add Manga
                {/* <Nav.Link eventKey="link-1">Add a Manga</Nav.Link> */}
            </Button>
            
        </Nav.Item>
        <Nav.Item>
            <Button className ='nav-button'>Edit Manga</Button>
            {/* <Nav.Link eventKey="link-2">Edit a Manga</Nav.Link> */}
        </Nav.Item>
      </div>
    </Nav>
  );
}

export default BasicNav;