import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
// import movies from './data.json'
import movies from './movie.json'

function App() {
  return <>
<div className="app">

    <Header/>

    <div className="main">

    {
      movies.map((e)=>{
     {/* return( <Movie title={e.Title} year={e.Year} img={e.Poster}/> */}
     return( <Movie title={e.title} year={e.year} img={e.thumbnail}/>

      )})
    }
      
    </div>
</div>
  </>
   
  
}

export default App;
