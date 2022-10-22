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
                name: action.payload
            };
        case typesAuth.logout:

            return {
                logged: false
            }
        default:
            return state;
    }
}