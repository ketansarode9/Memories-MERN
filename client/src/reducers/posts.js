import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
// this posts array is for front-end purose - the GLOBAL STATE IS CREATED i.e - Redux Store to maintain and store the data dynmically to show-the 
//respective content from posts array -> to respective user ( which is on APP.JS page ( which is always renderd dynmically for each api call))
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log("fetched all");
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      console.log("DEFAULT MODE -- REDUCERS->POST.JS");
      return posts;
  }
};