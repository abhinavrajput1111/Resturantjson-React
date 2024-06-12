import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Section1 from "./components/section1.jsx";
import Section2_testimonial from "./Section_testimonial.jsx";
// import Quotes2 from "./Quotes2.jsx";

{
  /*import Footer from "./components/footer.jsx";*/
}
import Footer from "./components/Footer.jsx";

import "./App.css";


function Home() {
  return (
<>
{/* <Navbar /> */}
      <Hero />
      <Section1 />
      <Section2_testimonial />
      

    </>
  );
}

export default Home;
