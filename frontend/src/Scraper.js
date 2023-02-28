import axios from 'axios';

const Scraper = () => {
    
        axios.get('https://cors-anywhere.herokuapp.com/https://myanimelist.net/manga.php') 
	    .then(({ data }) => console.log(data));
    return (null);
}
 
export default Scraper;