import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewVideo from './pages/NewVideo'
import BasePage from './pages/BasePage'

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/NewVideo' element={<NewVideo />}></Route>
                    <Route path="*" element={<BasePage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes