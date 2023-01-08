import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";


const SharedLayout = () => {
    const navStyle = {
        backgroundColor:'lightgreen',
        display:'flex',
        justifyContent:'space-around',
        fontSize:'25px'
    }
    const selectedImg = useSelector(state => state?.cityViewReducer?.selectedImage)
    return(
        <div>
            <nav style={navStyle}>
                <Link to='/'>Main Page</Link>
                <Link to={`/selected-image/${selectedImg}`}>Selected Image</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default SharedLayout