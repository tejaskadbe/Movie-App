// This Component Renders movies returned from api and its logic
import React, { useState, useEffect } from "react";
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material'

import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "..";

const Movies = () => {

    const [page, setPage] = useState(1);
    const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
    //state is global state of app. state.currentGenreOrCategory goes to store finds its mapping and returns value of whole object from 
    //which only genreIdOrCategoryName is required so ,it is destructured and stored in { genreIdOrCategoryName}.


    //Fetching data(movies) using useGetMoviesQuery
    const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

    console.log(data);

    if (isFetching)
        return (
            <Box display="flex" justifyContent="center" mt="8px">
                <CircularProgress size='4rem' />
            </Box>

        );

    if (!data.results.length) {
        return (
            <Box display="flex" alignItems='center' mt='20px'>
                <Typography variant="h4">
                    No movies that match that name
                    <br />
                    Please  Search something else
                </Typography>
            </Box>
        )
    }
    if (error) return 'An error has occured';
    return (

        <>
            < MovieList movies={data} />

        </>
    );
};

export default Movies;







