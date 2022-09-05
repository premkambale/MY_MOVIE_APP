import { useState } from 'react';
import './App.css';
import Moviecomponent from './componants/inputControl/Moviecomponent';
import MovieinfoComponent from './componants/inputControl/MovieinfoComponent';
import axios from 'axios';
 
function App() {

  //states
  const [searchQuery ,setSearchQuery]=useState();
  const [timeoutId ,updateTimeoutId]=useState();
  //to assign movie list 
  const [movieList,updateMovieList]=useState();
  //onovieSelect
  const [selectedMovie ,onMovieSelect]=useState();

//apikey
const API_KEY = "7b7154de";



  const ontextChange = (e)=>{
    e.preventDefault();
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value); 
    const timeout=setTimeout(()=>fetchData(e.target.value),500);
    updateTimeoutId(timeout);

  }


  //api call
  const fetchData = async(searchString)=>{
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    console.log(response.data.Search);
    
    updateMovieList(response.data.Search);

  }
 

 

  return (
    <>
      <div className='Container'>
        <div className='header'>
          <div className='head'>MoviePlaza</div>
          <div className='search'>
            <input type="text" name="search" placeholder='Search Movie'
             onChange={ontextChange} value={searchQuery}/>
          </div>
        </div><br/><br/>
        
        {
          selectedMovie ?
           <MovieinfoComponent 
           selectedMovie={selectedMovie}
           onMovieSelect={onMovieSelect}
           />
           :""
        }
        
        <div className='movieList'>
          {
            movieList?.length
             ? movieList.map((movie,index)=>
             <Moviecomponent
              key={index} 
              movie={movie}
               onMovieSelect={onMovieSelect}
               />)
                : "No Movie Found"
          }
          


        </div>
      </div>
    </>
  );
}
export default App;
   