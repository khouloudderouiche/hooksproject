
import { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import { dataMovies } from './Data';
import './App.css';
import Add from './component/Add';

function App() {
  const addMovie=(newMovie)=>{
    setMovieList([...movieListe,{...newMovie,id:movieListe.length+1}])
  }
  const [ searchbyName,setSearchbyName] = useState("")
  const searchName=(name)=>{
    setSearchbyName(name)
  }
  const [ movieListe,setMovieList]= useState(dataMovies)
  const[rating,setRating]=useState(1)


  return (
    <div className="App">
      <Filter  searchName={searchName} setRating={setRating}   />
      <MovieList movieListe={movieListe.Filter(el=>el.title.toUppercase().includes( searchbyName.toUpperCase().trim())&&el.rating>=rating)} /> 
      <Add addMovie= {addMovie} />
      
      
    </div>
  );
}

export default App;
