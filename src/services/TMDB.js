import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
const page = 1;

// The createApi function is part of Redux Toolkit's createAsyncThunk API. 
// It is used to create an API slice, which encapsulates the logic for making asynchronous API calls in a Redux store.
// This function simplifies the process of defining Redux actions and reducers for API interactions.

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    // The reducerPath is a unique key that service will be mounted to in your store.
    // If you call createApi more than once in your application, you will need to provide a unique value each time. 

    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),

    // first parameter to endpoint is builder which returns object, and which allows us to build a specific request

    // builder.query is a method provided by the builder object. 
    // It is used to define a query endpoint for making GET requests to the API. 
    // This method allows you to specify how the API endpoint should be constructed,
    // including the URL and any query parameters.

    endpoints: (builder) => ({
        // Get Genres
        getGenres: builder.query({
            query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
        }),

        // Get Popular movies by category or genre
        getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page, searchQuery }) => {
                if (searchQuery)
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;

                // Get movie by Category
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string')
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;

                // Get movie by genre
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number')
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&include_adult=false&api_key=${tmdbApiKey}`;

                // Get Popular Movies
                return `/discover/movie?api_key=${tmdbApiKey}&include_adult=false&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc`;
            },
        }),

        // Get Movie by ID
        getMovie: builder.query({
            query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
        }),

        // Get User-Specific List (Movie Recommendations)
        getRecommendations: builder.query({
            query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
        }),

        // Get Actor Details
        getActorsDetails: builder.query({
            query: (id) => `/person/${id}?api_key=${tmdbApiKey}`,
        }),

        // 🔥 New: Get Movies of an Actor
        getActorsMovies: builder.query({
            query: (id) => `/person/${id}/movie_credits?api_key=${tmdbApiKey}`,
        }),
    }),
});

// When you create an API using Redux Toolkit's createApi, it automatically generates selectors for each query
// endpoint you define. These selectors follow a naming convention: use{QueryName}Query.
// In this code, you have multiple endpoints, so you will have corresponding selectors generated.

export const {
    useGetMoviesQuery,
    useGetGenresQuery,
    useGetMovieQuery,
    useGetRecommendationsQuery,
    useGetActorsDetailsQuery,
    useGetActorsMoviesQuery,  // 🔥 Exported this so it can be used in Actors.jsx
} = tmdbApi;






