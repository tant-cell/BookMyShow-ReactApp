
import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import SingleMovieFetch from './components/SingleMovieFetch';
import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
import CardSlider from './components/CardSlider';
//import Premiers from './components/Premiers';
import SingleMovie from './components/SingleMovie';
import Footer from './components/Footer';
import Registeration from './components/Registeration';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Routes>
            
                
            <Route exact path="/movies" element= {<AllMoviesFetch/>}/>
            
            <Route exact path ="/movies/:movid"  element ={<SingleMovieFetch/>}/> 

            <Route exact path="/register" element= {<Registeration/>}/>
            
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;