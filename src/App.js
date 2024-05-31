import React from 'react'
import Mainpage from './components/Mainpage'
import { BrowserRouter} from 'react-router-dom';
import Navpage from './components/Navpage';
import './App.css'

const App = () => {
  return (
    <React.Fragment>
    
      <BrowserRouter>
 
        <Mainpage/> 
        
      </BrowserRouter>
    
   
    </React.Fragment>
    
  )
}

export default App
