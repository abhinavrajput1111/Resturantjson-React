import { Link } from "react-router-dom";  

function Navbar() {
  return (
    <>
      <div id="wrapper" className="relative mb-5">
        <div
          id="nav_box"
          className="nav_box flex justify-between p-5 items-center sticky top-0 z-10"
        >
          <div className="logo-div flex md:gap-3 gap-1">
            <img src="https://flowbite.com/docs/images/logo.svg" />
            <h2 className="text-2xl font-semibold">GeekFoods</h2>
          </div>
          <div className="nav-links-list">
            <ul className="md:flex md:gap-8 sm:block hidden">
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
              <li>
                <Link to="/restaurant">Restaurant</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="font-semibold bg-blue-500 hover:bg-blue-400 text-white px-2 py-1 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
