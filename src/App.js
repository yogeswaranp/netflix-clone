import Row from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';

function App() {
  // console.log(requests.fetchNetflixOriginals)
  return (
    <div className="App">
      <Nav/>
      <Banner/>
     <Row title='Netflix Orginal' fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow={true}/>
     <Row title='Trending Now'fetchUrl={requests.fetchTrending}/>
     <Row title='TopRated'fetchUrl={requests.fetchTopRated}/>
     <Row title='ActionMovies'fetchUrl={requests.fetchActionMovies}/>
     <Row title='ComedyMovies'fetchUrl={requests.fetchComedyMovies}/>
     <Row title='HorrorMovies'fetchUrl={requests.fetchHorrorMovies}/>
     <Row title='RomanceMovies'fetchUrl={requests.fetchRomanceMovies}/>
     <Row title='Documantarie'fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}
export default App;
