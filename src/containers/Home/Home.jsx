import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Home-components/Header.jsx'
import HomeLayout from './HomeLayout.jsx'
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';

function Home() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeLayout/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/cadastro' element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Home
