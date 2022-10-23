import { typesAuth } from "../types/types.auth";


const initialState = {
    logged: false,
}
export const authReducer = (state, action) => {
    switch (action.type) {
        case typesAuth.login:

            return {
                ...state,
                logged: true,
                user: action.payload
            };
        case typesAuth.logout:

            return {
                ...state,
                logged: false,
                user: null
            }
        default:
            return state;
    }
}