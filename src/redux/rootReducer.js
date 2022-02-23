import {combineReducers} from "redux";
import {MUTATION_TYPES} from "./actions";
// reducers *******************************************************************************************

const reducer = (state = {}, action) => {
    switch (action.type) {
        case MUTATION_TYPES:

        default:
            return state
    }
}


// end reducers ***************************************************************************************
// root Reducer = combine Reducers ********************************************************************
export const rootReducer = combineReducers({
    reducer:reducer
})