import { useState } from 'react'
import './App.css'
import BlogDetails from './Components/BlogDetails'
import Loader from './Components/Loader';
import { useEffect } from "react";
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

   const LOADER = Loader(BlogDetails);
   const [isloading, setISloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setISloading(false);
    }, 5000);
  });

  return (
    <>
      <div>
         {isloading ? 
          (
            <LOADER isloading = {isloading}/>
          ):
          (
            <>
              <Header/>        
              <BlogDetails />
              <ScrollToTop />
              <Footer />
            </>
          )}

      </div>
     <div>
   
     </div>
    </>
  )
}

export default App
