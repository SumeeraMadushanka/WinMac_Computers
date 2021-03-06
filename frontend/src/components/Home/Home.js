import React from "react";
import "./Home.scss";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const { id, type, email, contactNo, lastName, firstName, token } =
    useParams();
    
  return (
    <div className=" container max-w-full">
      <div className="bg-bg-homepage bg-cover h-screen hover:duration-600">
        <div className="hero">
          <center>
            <div id="container">
              <div className=" translate-y-48">
                <Link to="/login">
                  <button className="learn-more my-20" style={{ width: "30%" }}>
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <h1 className="button-text -translate-y-2">Get Started</h1>
                  </button>
                </Link>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Home;
