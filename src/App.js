import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import RoutingPage from './components/RoutingPage';
import './App.css'

const App = () => {
  return (
    <>
    
      <BrowserRouter>
 
        <RoutingPage/> 
        
      </BrowserRouter>
  
    </>
    
  )
}

export default App
