import {Routes, Route, Link} from "react-router-dom";

import AlbumList from "./pages/AlbumList";
import PhotoList from "./pages/PhotoList";
import UserList from "./pages/UserList";
import './App.css';

function App() {
  return (
      <>



          <Routes>
              <Route path="/" element={<UserList />}/>
              <Route path="/albums" element={<AlbumList />} />
              <Route path="/photos" element={<PhotoList />} />

          </Routes>
      </>

  );
}

export default App;
