import React from "react";
import ReactDOM from "react-dom/client";
import restroImage from "./image/pizza.jpg"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKb_ifO8E7BDZm1yu1N1pMqrgi_v9ctxzSA&s"
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

const Restrocard = () => {
  return(
    <div className="restro-card">

      <img src={restroImage} alt="" className="restro-logo"/>

      <h3>restro name</h3>

      <h3> 4 star</h3>

      <h3>min away</h3>

      <h3>chinese food</h3> 
    </div>
  )
}

const Body = ()=>{
  return (
    <div className="body">

      <div className="search-container">Search</div>

      <div className="restro-container">
       <Restrocard />
       <Restrocard />
       <Restrocard />
       <Restrocard />
       <Restrocard />
      </div>

    </div>
  )
}


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body /> 
      //footer
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
