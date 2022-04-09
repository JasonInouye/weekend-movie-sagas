import React from 'react';
import { useHistory } from 'react-router-dom'
import MovieDetails from '../MovieDetails/MovieDetails';

function MovieItem({ movieItem }) {
    console.log('inside of MovieItem');
    const history = useHistory();

    const handleDetails = () => {
        console.log(`Inside of handleDetails ${movieItem.id}`);
        dispatch({ type: 'FETCH_DETAILS', payload: movieItem.id })
        // history.push('/details')
    }

    return (
        <div key={movieItem.id} >
            <h3>{movieItem.title}</h3>
            <img src={movieItem.poster} alt={movieItem.title} onClick={() => handleDetails(movieItem.id)}/>
            <MovieDetails 
               
            />
        </div>
    )
}

export default MovieItem;

