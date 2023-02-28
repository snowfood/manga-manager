import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { GenreChart } from './GenreChart';


function Dashboard({genres}) {
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
                    <p>Total Manga Read</p>
                    <h2>845</h2>
                </div>
                <div className="col-sm-3 border">
                    <p>Weekly Chapter Avg</p>
                    <h2>13</h2>
                </div>
                <div className="col-sm-3 border">
                    <p>Most Daily Chapters</p>
                    <h2>246</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 border pie-chart">
                    <p>Breakdown by Genre</p>
                    <div className="pie-chart">
                      <GenreChart genres={genres}/>
                    </div>
                    
                </div>
            </div>
        </div>
      </Tab>
      <Tab eventKey="top-ten" title="Top 5 Mangas">
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
      </Tab>
      <Tab eventKey="bookmarked" title="Bookmarked">
      <ListGroup >
            <ListGroup.Item>
              <div className="flex-container">
                <div>1</div>
                <div><Button>Read Now</Button></div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="flex-container">
                <div>2</div>
                <div><Button>Read Now</Button></div>
              </div>
            </ListGroup.Item>


        </ListGroup>
      </Tab>
    </Tabs>
  );
}

export default Dashboard;