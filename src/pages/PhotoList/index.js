import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const location = useLocation();
    const albumId = new URLSearchParams(location.search).get('albumId');

    useEffect(() => {
        if (albumId) {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                .then(response => response.json())
                .then(data => setPhotos(data));
        }
    }, [albumId]);

    return (
        <div>
            <h2>Photo List</h2>
            <Link to="/">Back to UserList</Link>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;

