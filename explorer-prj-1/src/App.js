import "./App.css";
import ProfCard from "./Components/ProfileCard";


function App() {
  return (
    <div className="App">
      <div className="title">
          <h1>Profile Cards</h1>
      </div>
       <div className="card-info">
                <ProfCard
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s"
                      name="Noha Ace"
                      email="noha@example.com"
                      field="Web Developer"
                      age=" 21 yrs"
                      city="New York" 
                />
                <ProfCard
                      image="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
                      name="Smith Jones"
                      email="jones@example.com"
                      field="UI/UX Designer"
                      age=" 28 yrs"
                      city="London" 
                />
                <ProfCard
                      image="https://i.pinimg.com/736x/ee/34/34/ee34347211a3d0744667a86096949da8.jpg"
                      name="Maria Jack"
                      email="maria@example.com"
                      field="Data Analyst"
                      age="22 yrs"
                      city="Berlin" 
                />
                <ProfCard
                      image="https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"
                      name="William Wales"
                      email="wales@example.com"
                      field="Ai/Ml Engineer"
                      age="30 yrs"
                      city="Toronto" 
                />
                <ProfCard
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaWWvKZDdYSij3dwu8WX7A1zm9luxN_EKYw&s"
                      name="Jenna Aisle"
                      email="jen@example.com"
                      field="Full Stack Developer"
                      age="29 yrs"
                      city="New York" 
                />
                <ProfCard
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEf8UGrEQ2M0fuvvAa50MAgca2grebrg2PJQ&s"
                      name="John Peter"
                      email="john@example.com"
                      field="Data Analyst"
                      age="33 yrs"
                      city="Sydeney" 
                />
       </div>
    </div>
  );
}

export default App;

