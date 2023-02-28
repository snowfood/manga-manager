import './App.css';
import Nav from './Nav';
import Table from './Table';
import Updates from './Updates';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [genres, setGenres] = useState([]);
  useEffect(()=>{
    axios
      .get("http://localhost:8000/api/genres/")
      .then((res) => setGenres(res.data))
      .catch((err) => console.log(err));

     

  },[]);


  
  return (
    <div className="App">
      <Nav/>
      <div className="container container-body">
        <div className="row">
          <div className="col-md-8">
            <Dashboard genres={genres}/>
            <Table/>
          </div>
          <div className="col-md-4">
            <Updates/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
