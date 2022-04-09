import React from 'react';
import { useDispatch } from 'react-redux';

function MovieItem({ movieItem }) {
    console.log('inside of MovieItem', movieItem);

    return (
        <div key={movieItem.id} >
            <h3>{movieItem.title}</h3>
            <img src={movieItem.poster} alt={movieItem.title} />
        </div>
    )
}

export default MovieItem;

