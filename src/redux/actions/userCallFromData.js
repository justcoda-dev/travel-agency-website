import {ACTION_TYPES} from "../actionTypes";

export const userCallFromData = (state = {}, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.OFFICES:
            return {...payload}
        default:
            return state
    }
}