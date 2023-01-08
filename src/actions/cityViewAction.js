import {access_key,  FETCH_CITY_REAL, FILTER_IMAGE, INPUT_CITY, LOADING, SELECTED_IMAGE} from "../helper";

export const fetchImageReal = city => dispatch => {
    dispatch({
        type: LOADING,
        payload: true
    })
    fetch(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=${city}&orientation=landscape`)
        .then(res => res.json())
        .then(({results}) => {
            let newRes = results.map(item => ({
                url: item.urls.regular,
                des: item.alt_description
            }))
            dispatch({
                type: FETCH_CITY_REAL,
                payload: newRes
            })
            dispatch({
                type: LOADING,
                payload: false
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: LOADING,
                payload: false
            })
        })
}

export const selectImg = (selectedIndex) => dispatch => {
    dispatch(
        {
            type: SELECTED_IMAGE,
            payload: selectedIndex
        }
    )
}

