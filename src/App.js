import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Chart from './pages/Chart';
import New from './pages/New';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Albums from './pages/Albums/Albums';
import AlbumList from './pages/Albums/AlbumBox/AlbumList';
import Songs from './pages/Songs';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='chart' element={<Chart />} />
                    <Route path='new' element={<New />} />
                    <Route path='albums' element={<AlbumList />} />
                    <Route path='albums/:albumName' element={<Albums />} />
                    <Route path='songs' element={<Songs />} />
                    <Route path='about' element={<About />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
