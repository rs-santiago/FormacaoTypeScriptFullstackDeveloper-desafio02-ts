import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.page";
import Conta from "./pages/Conta.page";
import ContaInfo from "./pages/ContaInfo.page";
import UserInfo from "./pages/UserInfo.page";
import { useAppContext } from './components/AppContext.component';
import { getAllLocalStorage } from './services/storage/storage';

const MainRoutes = () => {
    const { isLoggedIn } = useAppContext()
    const storage = getAllLocalStorage()
    const storageJson = storage ? JSON.parse(storage) : null
    return (
        <Routes>
            <Route path='/' element={storageJson?.userDate ? <Conta /> : <Home />} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />} />
            <Route path='/infoconta' element={<ContaInfo />} />
            <Route path='/infouser' element={storageJson?.userDate ? <UserInfo /> : <Home />} />
        </Routes>
    )
}

export default MainRoutes