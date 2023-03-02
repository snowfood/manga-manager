import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { GenreChart } from './GenreChart';
import axios from "axios";
import { useState } from 'react';


function Dashboard({mangas,genres}) {
  let countBookmarked = 0;
  let countRead = 0;

  mangas.map((manga)=>{
    if (manga.bookmarked){
      countBookmarked ++;
    }
    if(!manga.currently_reading && !manga.bookmarked){
      countRead++;
    }
  })
  const markAsCurrentlyReading = (manga)=>{
    axios.patch(`http://localhost:8000/api/mangas/${manga.id}/`, {
            "bookmarked": false,
            "currently_reading": true
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
    <Tabs
      defaultActiveKey="overview"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab className="border" eventKey="overview" title="Overview" default>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 border">
                    <p>Total Manga Currently Reading</p>
                    <h2>{mangas.length-countRead}</h2>
                </div>
                <div className="col-sm-3 border">
                    <p>Total Manga Read</p>
                    <h2>{countRead}</h2>
                </div>
                <div className="col-sm-3 border">
                    <p>Total Manga Bookmarked</p>
                    <h2>{countBookmarked}</h2>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-sm-12 border pie-chart">
                    <p>Breakdown by Genre</p>
                    <div className="pie-chart">
                      <GenreChart genres={genres}/>
                    </div>
                    
                </div>
            </div> */}
        </div>
      </Tab>
      {/* <Tab eventKey="top-ten" title="Top 5 Mangas">
        <ListGroup>
          <ListGroup.Item>
              <div className="flex-container">
                <div>1</div>
                <div>
                  <Button>↑</Button>
                  <Button>↓</Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="flex-container">
                <div>2</div>
                <div>
                  <Button>↑</Button>
                  <Button>↓</Button>
                </div>
              </div>
            </ListGroup.Item>

        </ListGroup>
      </Tab> */}
      <Tab eventKey="bookmarked" title="Bookmarked">
      <ListGroup >
        {mangas.map((manga)=>{
          if (manga.bookmarked){
            return(
              <ListGroup.Item>
                <div className="flex-container">
                  <div>{manga.name}</div>
                  <div><Button className="bookmark-btn" href={manga.url} target="_blank">Read Now</Button>
                  <Button className="bookmark-btn" variant="secondary" onClick={()=>markAsCurrentlyReading(manga)}>Mark as Currently Reading</Button></div>
                </div>
              </ListGroup.Item>
            )
          }
          

        })}
        </ListGroup>
      </Tab>
    </Tabs>
  );
}

export default Dashboard;