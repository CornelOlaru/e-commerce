import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/category/1">Winter Offer</Link>
          <Link to="/category/2">Spring Offer</Link>
          <Link to="/category/3">Autumn Offer</Link>
        </nav>
       
      
    </div>
  );
};

export default Nav;
