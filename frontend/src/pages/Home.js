import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import '../App.css'

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
      <div id="backm">
        <>
        <div className="logo">
          <div className="jumbotron">

            <h1>Welcome {user ? user.name : null}</h1>
            <hr className="my-4" />
            <div class="h1"><h1>Live your work Dream  <br />Find a better way to work</h1></div>
            <button className="btn btn-primary " href="/mycontacts">Start managing...</button>
            <hr className="my-4" />
            <a className="btn btn-info" href="/create" role="button">
              Add Clients
            </a>
          </div>
        </div>
        </>
      </div>
  );
};

export default Home;
