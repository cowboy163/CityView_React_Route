import {fetchImageReal, filterImage, selectImg, userInput} from "../actions/cityViewAction";
import {useDispatch, useSelector} from "react-redux";
import './Main.css'
import {useEffect} from "react";

export const Main = () => {
    const dispatch = useDispatch()
    const imageLibrary = useSelector(state => state?.cityViewReducer?.imageLibrary)
    const selectedImg = useSelector(state => state?.cityViewReducer?.selectedImage)
    const isLoading = useSelector(state => state?.cityViewReducer?.isLoading)
    useEffect(() => dispatch(fetchImageReal('toronto')), [])

    return <div className='pageContainer'>

        {isLoading && <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt=""/>}
        {imageLibrary.length !== 0 && <h1>{imageLibrary[0].des}</h1>}
        {imageLibrary.length !== 0 && <img className='bgImg' src={imageLibrary[selectedImg].url} alt=""/>}
        <div className="smallImgLibrary">
            {
                imageLibrary.length !== 0 && imageLibrary.map(
                    (item, index) => <img
                        onClick={()=>dispatch(selectImg(index))}
                        className='smallImg' key={index} src={item.url} alt={item.des}/>
                )
            }
        </div>

    </div>
}