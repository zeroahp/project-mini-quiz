import { combineReducers} from "redux"
import AuthenReducer from "././authen";
const AllReducer = combineReducers(
    {
        AuthenReducer,
    }
);

export default AllReducer