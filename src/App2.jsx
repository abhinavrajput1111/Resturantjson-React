import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
// import Quotes2 from "./Quotes2.jsx";
import Contact from "./Contact.jsx"
import Restaurant from "./Restaurant.jsx"
import Quotes from "./Quotes2.jsx";
import "./App.css";
import Randomquotes from "./Randomquotes.json";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}>  </Route>
            <Route path="/quotes" element={<Quotes Randomquotes={Randomquotes}/>}>  </Route>
            <Route path="/contact" element={<Contact/>}>  </Route>
            <Route path="/restaurant" element={<Restaurant/>}>  </Route>

          
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
