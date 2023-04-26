import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Gui from './pages/Gui';
import Home from "./pages/Home";
import { Route, Routes} from 'react-router-dom';
import Realms from './pages/Realms';
export default function Main() {
    useEffect(() => {
        document.title = "Alpha Network"
    })
    
    return (
        <>

            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/gui' element={<Gui />}></Route>
                <Route path='/realms' element={<Realms />}></Route>
            </Routes>
        </>
    )
}
