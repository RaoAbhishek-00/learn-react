import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="logo"
            className="logo"
          />
        </div>
  
        <h1 className="site-name">Website Name</h1>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>about us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;