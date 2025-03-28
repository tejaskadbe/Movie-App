import { Grid, Box } from "@mui/material";
import React from "react";
import useStyles from './styles';
import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies }) => {
    const classes = useStyles();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: { xs: 0, sm: '250px' },  // Push content away from sidebar
            width: { xs: '100%', sm: 'calc(100% - 250px)' },  // Prevent overflow
            overflowX: 'hidden',
            minHeight: '100vh', // Ensure full viewport height
            padding: '1rem'
        }}>
            <Grid container spacing={2} className={classes.moviesContainer}>
                {movies.results.slice(0, numberOfMovies).map((movie, i) => (
                    <Movie key={i} movie={movie} i={i} />
                ))}
            </Grid>
        </Box>
    );
};

export default MovieList;


// Renders List of Movies

// import { Grid } from "@mui/material";
// import React from "react";
// import useStyles from './styles';
// import { Actors, MovieInfo, Movie, NavBar, Profile } from '..';

// const MovieList = ({ movies, numberOfMovies }) => {
//     const classes = useStyles();

//     console.log('Logging Movie list form Movie Component');

//     return (
//         // Second argument to map is the index of current iterating element
//         <Grid container className={classes.moviesContainer}>
//             {movies.results.slice(0, numberOfMovies).map((movie, i) => (
//                 <Movie key={i} movie={movie} i={i} />
//             ))}
//         </Grid>
//     );
// };

// export default MovieList;