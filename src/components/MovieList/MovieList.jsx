import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

import {makeStyles, Grid, Container} from '@material-ui/core';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const useStyles = makeStyles({
        root: {
            maxWidth: 400,
            padding: 40
        }
    });

    const classes = useStyles();

    return (
        <Container>
            <h1>MovieList</h1>
            <Grid container>
                <Grid item xs={12}>
                    <section className="movies">
                        {movies.map(movie => {
                            return (
                                <MovieItem
                                    key={movie.id}
                                    movieItem={movie}
                                />
                            );
                        })}
                    </section>Î
                </Grid>
            </Grid>
        </Container>

    );
}

export default MovieList;