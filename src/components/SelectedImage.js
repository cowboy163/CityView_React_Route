import {useEffect} from "react";
import {fetchImageReal} from "../actions/cityViewAction";
import {useSelector} from "react-redux";
import {cityViewReducer} from "../reducers/cityViewReducer";
import {useParams} from "react-router-dom";


const SelectedImage = () => {
    useEffect(() => {
        fetchImageReal('toronto')
    }, [])
    const value = useParams()
    const imageLibrary = useSelector(state => state?.cityViewReducer.imageLibrary)
    return(
        <div>
            <h1>Single Image</h1>
            {imageLibrary.length > 0 && <p>{imageLibrary[value.index].des}</p>}
            {imageLibrary.length > 0 && <img src={imageLibrary[value.index].url}/>}

        </div>
    )
}

export default SelectedImage