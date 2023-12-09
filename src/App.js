import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>
      <Nav/>
     <Banner  fetchUrl={requests.fetchActionMovies}/>
    <Row  isposter={true}  title="Trending Movie" fetchUrl={requests.fetchTrending}/>
    <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>

     <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>

<Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>

<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
