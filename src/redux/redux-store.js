import {combineReducers, createStore} from "redux";
import bookingPageReducer from "./reducerBooking.ts";

let redusers = combineReducers({
    bookingPage: bookingPageReducer
})
let store = createStore(redusers);
export default store;