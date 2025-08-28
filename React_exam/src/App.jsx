import Header from "./Components/Header.jsx";
import { Routes, Route } from "react-router-dom";  
import AddStudent from "./Components/AddStudent.jsx";
import Home from "./Components/Home.jsx";
import EditStudent from "./Components/EditStudent.jsx";
import ViewDetails from "./Components/ViewDetail.jsx";
import SignUp from "./Components/SignUp.jsx";
import SignIn from "./Components/SignIn.jsx";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="/students/:id" element={<ViewDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

       

      </Routes>
    </>
  );
}

export default App;
