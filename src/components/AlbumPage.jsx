import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FETCH_ALBUM_REQUEST, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_FAILURE } from "../constants/albumConstants";
import axios from "axios";

const AlbumPage = (props) => {
  const albumId = props.match.params.id;
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [albumId, dispatch]);

  const fetchAlbum = (albumId) => async (dispatch) => {
    try {
      dispatch({ type: FETCH_ALBUM_REQUEST });

      const { data } = await axios.get(`/api/albums/${albumId}`);

      dispatch({
        type: FETCH_ALBUM_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: FETCH_ALBUM_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <nav
            className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="nav-container">
              <a className="navbar-brand" href="/">
                <img src="logo/Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Search
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="col-10">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">{album.name}</h1>
            </div>
          </div>
          <div className="row">
            {album.tracks &&
              album.tracks.map((track) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={track.id}>
                  <div className="card mb-4">
                    <img className="card-img-top" src={track.image} alt={track.name} />
                    <div className="card-body">
                      <h5 className="card-title">{track.name}</h5>
                      <p className="card-text">{track.artist}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
