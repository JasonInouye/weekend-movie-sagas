import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';

function MovieDetails() {

    const history = useHistory();
    const genres = useSelector(store => store.genres);
    const details = useSelector(store => store.selectedMovie);
    console.log('inside of movieDetails', details);

    const handleHome = () => {
        history.push('/');
    }

    return (
        <Container>
            {details.map((details, i) => {
                return (
                    <div key={i}>
                        <img src={details.poster} alt={details.title} />
                        <h3>{details.title}</h3>
                        <p>{details.description}</p>
                    </div>
                )
            })}
            <p>Genres:</p>
            {genres.map((genre, i) => {
                return (
                    <div key={i}>
                        <p>{genre.name}</p>
                    </div>
                )
            })}
            <Button onClick={handleHome} variant="contained" endIcon={<HomeIcon />}>Return Home</Button>
        </Container>
    )
};

export default MovieDetails;