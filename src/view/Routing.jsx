import {Route, Link, Router, Routes} from "react-router-dom";
import Layout from "../components/layout/Layout";
import MainPage from "./mainPage/MainPage";


const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default Routers;