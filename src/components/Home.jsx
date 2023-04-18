import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=thasup")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="col-12 col-md-9 offset-md-3 mainPage">
              <div className="row">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                  <div>TRENDING</div>
                  <div>PODCAST</div>
                  <div>MOODS AND GENRES</div>
                  <div>NEW RELEASES</div>
                  <div>DISCOVER</div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div id="searchResults" style={{ display: "none" }}>
                    <h2>Search Results</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div id="rock">
                    <h2>Rock classNameics</h2>
                    <div
                      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      id="rockSection"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div id="pop">
                    <h2>Pop Culture</h2>
                    <div
                      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      id="popSection"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div id="hiphop">
                    <h2>#HipHop</h2>
                    <div
                      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      id="hipHopSection"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
