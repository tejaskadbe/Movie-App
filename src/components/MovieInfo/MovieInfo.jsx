import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { Link, useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/TMDB";
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, Rating } from '@mui/material';

import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import useStyles from './styles'
import genreIcons from '../../assets/genres';
import { useDispatch } from 'react-redux';
import { useGetRecommendationsQuery } from '../../services/TMDB';
import { MovieList } from '..';
import { useState } from 'react';


const MovieInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { data: recommendations, isRecommendationsFetching } = useGetRecommendationsQuery({ list: '/recommendations', movie_id: id })
    const isMovieFavorited = true;
    const isMovieWatchlisted = true;

    const addToFavorites = async () => {
        // Adds favorite movie to users account
    };
    const addToWatchList = async () => {
        // Adds movies to watch to users account
    };
    const [open, setOpen] = useState(false);

    const { data, isFetching, error } = useGetMovieQuery(id);

    if (isFetching) {
        return (
            <Box display='flex' alignItems='center' justifyContent='center'>
                <CircularProgress size='8rem' />
            </Box>
        )
    }

    if (error) {
        console.log(`Error in MovieInfo`);
        return (
            <Box display='flex' alignItems='center' justifyContent='center'>
                <Link to="/">Something went wrong - Go back.</Link>
            </Box>
        );
    }

    console.log(`Rendering Grid of MovieInfo`);

    // Find the director from the crew list
    const director = data?.credits?.crew?.find((person) => person.job === "Director");

    return (
        <Grid container sx={{ margin: '60px 220px', }}>
            <Grid item sm={12} lg={4} align='center'>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                    className={classes.poster}
                    alt={data?.title}
                    gutterBottom
                />
            </Grid>
            <Grid item container direction='column' lg={7}>
                <Typography variant="h3" align="center" gutterBottom>
                    {data?.title} ({data.release_date?.split('-')[0]})
                </Typography>
                <Typography variant="h5" align="center" gutterBottom>
                    {data?.tagline}
                </Typography>

                <Grid item className={classes.containerSpaceAround}>
                    <Box display='flex' align='center'>
                        <Rating readOnly value={data.vote_average / 2} />
                        <Typography gutterBottom variant='subtitle1' style={{ marginLeft: '10px' }}>
                            {data?.vote_average} / 10
                        </Typography>
                    </Box>

                    <Typography gutterBottom variant="h6" align="center" style={{ marginLeft: '48px' }}>
                        {data?.runtime} min / {data?.original_language}
                    </Typography>
                </Grid>

                <Grid container spacing={2} className={classes.genresContainer}>
                    {data.genres?.map((genre) => (
                        <Grid item key={genre.name} xs="auto">
                            <Link className={classes.links} to="/" onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
                                <img src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
                                <Typography color="textPrimary" variant="subtitle1">
                                    {genre?.name}
                                </Typography>
                            </Link>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant='h5' gutterBottom style={{ marginTop: '10px' }}>
                    Overview
                </Typography>
                <Typography gutterBottom>
                    {data?.overview}
                </Typography>

                {/* Director Section */}
                {director && (
                    <Typography variant='h5' gutterBottom style={{ marginTop: '20px' }}>
                        Director: <Link to={`/actors/${director.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{director.name}</Link>
                    </Typography>
                )}

                <Typography variant='h5' gutterBottom>
                    Top Cast
                </Typography>

                <Grid item container spacing={2}>
                    {data && data.credits.cast.map((character, i) => (
                        character.profile_path && (
                            <Grid key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{ textDecoration: 'none' }}>
                                <img className={classes.castImage}
                                    src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name} />
                                <Typography color="textPrimary">
                                    {character?.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {character.character.split('/')[0]}
                                </Typography>
                            </Grid>
                        )
                    )).slice(0, 6)}
                </Grid>

                <Box marginTop='5rem' width='100%'>
                    <Typography variant='h3' gutterBottom align='center'>
                        You might also like
                    </Typography>

                    {recommendations ? <MovieList movies={recommendations} numberOfMovies={12} /> : <Box> Sorry, Nothing was Found </Box>}
                </Box>
            </Grid>
        </Grid>
    )
};

export default MovieInfo;
