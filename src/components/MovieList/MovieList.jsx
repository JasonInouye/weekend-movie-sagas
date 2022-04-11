import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

import { Grid, Container } from '@material-ui/core';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <Container>
            <h1>MovieList</h1>
            <Grid container xs={12} spacing={8}>
                {movies.map(movie => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <MovieItem
                                key={movie.id}
                                movieItem={movie}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>

    );
}

export default MovieList;