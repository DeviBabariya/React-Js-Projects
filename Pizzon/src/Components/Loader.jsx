import loader from '../assets/BlogImages/loader.gif'
import "./Loader.css"

const Loader = (Comp) => {
  return ({ isloading, ...props }) => {
    if (isloading) {
      return <div  className='loader-controls'>
              <img src={loader}  alt="loader" /> 
              <p className='ms-3'>Loading</p>
             </div>
      
     
    } else {
      return <Comp {...props} />;
    }
  };
};

export default Loader;