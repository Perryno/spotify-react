const initialState = {
  songs: [],
  actualSong: null,
  likedSong: []
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALBUM_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_ALBUM_SUCCESS":
      return {
        ...state,
        album: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_ALBUM_FAILURE":
      return {
        ...state,
        album: {},
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default mainReducer;
