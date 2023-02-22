import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authorization from './components/authorization/Authorization';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/sign-in" element={<Authorization/>}/>
            </Routes>
        </div>
    );
}

export default App;
