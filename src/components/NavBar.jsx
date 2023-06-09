import React, { useState, useEffect } from "react";

function NavBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm !== "") {
      fetch(`https://api.example.com/search?query=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          props.setData(data);
          props.addSongs(data.songs);
        })
        .catch((error) => console.error(error));
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
      <div className="nav-container">
        <a className="navbar-brand" href="index.html">
          <img src="logo/Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <a className="nav-item nav-link" href="index.html">
                  <i className="fas fa-home fa-lg"></i>&nbsp; Home
                </a>
              </li>
              <li>
                <a className="nav-item nav-link text-white" href="index.html">
                  <i className="fas fa-book-open fa-lg "></i>&nbsp; Your Library
                </a>
              </li>
              <li>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append" style={{ marginBottom: "4%" }}>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                      id="button-addon1"
                      onClick={handleInputChange()}
                    >
                      GO
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-btn">
        <button className="btn signup-btn" type="button">
          Sign Up
        </button>
        <button className="btn login-btn" type="button">
          Login
        </button>
        <div>Cookie Policy</div> <div> Privacy</div>
      </div>
    </nav>
  );
}

export default NavBar;
