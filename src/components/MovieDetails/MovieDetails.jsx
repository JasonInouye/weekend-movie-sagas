import React from 'react';
import { useSelector } from 'react-redux';

function MovieDetails() {

    const genres = useSelector(store => store.genres);
    console.log('inside of movieDetails', genres);

    // return ( <p>yo</p>)

    return (
        <div>
            {genres.map((genre, i) => {
                return (
                    <div>
                        <p>{genre.name}</p>
                        <p>{genre.title}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default MovieDetails;