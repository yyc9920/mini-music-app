import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Chart from './pages/Chart';
import New from './pages/New';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Albums from './pages/Albums';
import Songs from './pages/Songs';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/chart' element={<Chart />} />
                    <Route path='/new' element={<New />} />
                    <Route path='/albums' element={<Albums />} />
                    <Route path='/songs' element={<Songs />} />
                    <Route path='/about' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
