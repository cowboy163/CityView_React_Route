import {FETCH_CITY_REAL, LOADING, SELECTED_IMAGE} from "../helper";

const initState = {
    imageLibrary: [],
    selectedImage: 0,
    isLoading: true
}

export const cityViewReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CITY_REAL:
            return {...state, imageLibrary: action?.payload}
        case SELECTED_IMAGE:
            return {...state, selectedImage: action?.payload}
        case LOADING:
            return {...state, isLoading: action?.payload}
        default:
            return state
    }
}