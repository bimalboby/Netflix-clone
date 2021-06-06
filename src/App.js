import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals,action,comedy,horror,documentaries,romance} from './urls'


function App() {
  return (
    <div className="App">
     <NavBar/> 
     <Banner/>
     <RowPost url={originals} title="Netflix Originals"/>
     <RowPost url={action} title="Action" isSmall/>
     <RowPost url={comedy} title="Comedy" isSmall/>
     <RowPost url={horror} title="Horror" isSmall/>
     <RowPost url={documentaries} title="Documentaries" isSmall/>
     <RowPost url={romance} title="Romance" isSmall/>
    </div>
  );
}

export default App;
