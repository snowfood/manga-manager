import './App.css';
import Nav from './Nav';
import Table from './Table';
import Updates from './Updates';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import axios from "axios";
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image'

function App() {
  const [genres, setGenres] = useState([]);
  const [mangas, setMangas] = useState([]);
  useEffect(()=>{
    axios
      .get("http://localhost:8000/api/genres/")
      .then((res) => setGenres(res.data))
      .catch((err) => console.log(err));

      axios
      .get("http://localhost:8000/api/mangas/")
      .then((res) => setMangas(res.data))
      .catch((err) => console.log(err));

  },[]);


  
  return (
    <div className="App">
      <Nav/>
      <div className="container container-body">
        <div className="row">
          <div className="col-md-10 col-sm-12 col-lg-10">
            <Dashboard mangas = {mangas} genres={genres}/>
            <Table tableType="currentlyReading" mangas = {mangas}/>
            <Table tableType = "read" mangas = {mangas}/>
          </div>
          <div className="col-md-2 col-sm-12 col-lg-2">
            <Updates mangas = {mangas}/>
          </div>
        </div>
      </div>
          <Image className="footer-img" src="Footer.png"></Image>
      
    </div>

  );
}

export default App;
