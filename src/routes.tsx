import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.page";
import Conta from "./pages/Conta.page";
import ContaInfo from "./pages/ContaInfo.page";
import React, { useContext } from 'react';
import { AppContext } from './components/AppContext.component';

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />} />
            <Route path='/infoconta' element={<ContaInfo />} />
        </Routes>
    )
}

export default MainRoutes