import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import AppLayout from './layout/AppLayout'
import { useEffect } from 'react';
import Aos from 'aos';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
    <Routes>   
      <Route
          path="/"
          element={
              <AppLayout />
          }>
            <Route
              index
              element={<Home />}
            />
             
           
        
        </Route>








    </Routes>
    </>
  )
}

export default App
