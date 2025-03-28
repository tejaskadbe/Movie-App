//Logic about Rendering Individule Movie Item

import React from "react";
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
const Movie = ({ movie, i }) => {
    const classes = useStyles();

    if (!movie) {
        return 'Undefined Obj'; // or handle the case when movie is undefined
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>

            <Grow in key={i} timeout={(i + 1) * 200}>
                <Tooltip disableTouchListener title={`${movie.overview} `}>
                    <Link className={classes.links} to={`/movie/${movie.id}`}>

                        <img className={classes.image} alt={movie.title} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : " https://www.fillmurray.com/200/300"} />

                        <Typography className={classes.title} variant='h5'>{movie.title}</Typography>

                        <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
                            <div>
                                <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
                            </div>
                        </Tooltip>
                    </Link>
                </Tooltip>

            </Grow>


        </Grid>
    );
};

export default Movie;