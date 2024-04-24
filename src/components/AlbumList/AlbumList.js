import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();

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
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;