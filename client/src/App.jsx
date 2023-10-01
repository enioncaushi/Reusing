import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './components/Detail';
import UpdateProduct from './components/UpdateProduct';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/products" element={<Main />} />
                    <Route path="/products/:id" element={<Detail />} />
                    <Route path="/products/:id/edit" element={<UpdateProduct />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
