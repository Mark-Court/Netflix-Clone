import "./App.css";
import Banner from "./components/Banner.jsx";
import Navbar from "./components/Navbar.jsx";
import Row from "./components/Row.jsx";
import requests from "./components/request.js";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Banner />
        <Row
         title="NETFLIX ORIGNALS"
          fetchUrl={requests.fetchNetflixOrignals}
          isLargeRow
          />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Moives" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
  );
}

export default App;
