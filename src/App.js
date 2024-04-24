import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import AlbumList from './components/AlbumList/AlbumList';
import PhotoList from './components/PhotoList/PhotoList';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/albums/:userId" element={<AlbumList />} />
                    <Route path="/photos/:albumId" element={<PhotoList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
