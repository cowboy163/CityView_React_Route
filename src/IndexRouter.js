import {Route, Routes} from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import SelectedImage from "./components/SelectedImage";
import NoMatch from "./components/NoMatch";
import {Main} from "./components/Main";


const IndexRouter = () => {
    return(
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="/selected-image/:index" element={<SelectedImage/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>

            </Routes>
    )
}

export default IndexRouter