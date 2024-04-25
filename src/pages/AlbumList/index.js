import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const location = useLocation();
    const userId = new URLSearchParams(location.search).get('userId');

    useEffect(() => {
        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
                .then(response => response.json())
                .then(data => setAlbums(data));
        }
    }, [userId]);

    return (
        <div>
            <h2>Album List</h2>
            <Link to="/">Back to UserList</Link>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`/photos?albumId=${album.id}`}>
                            <button>Photos</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;

