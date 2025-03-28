import { configureStore } from '@reduxjs/toolkit';
//a function provided by Redux Toolkit to create a Redux store.

import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import { tmdbApi } from '../services/TMDB';
// This service ({tmdbApi} )contains the configuration for making API requests to The Movie Database (TMDb).

// configureStore is called with an object as its argument, which contains the store configuration.

// reducer: This property is an object that specifies the reducers to be included in the store. 
// In this case, it includes 'tmdbApi', which is the slice name for the tmdbApi reducer.

export default configureStore({
    reducer: {
        'tmdbApi': tmdbApi.reducer,
        'currentGenreOrCategory': genreOrCategoryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

// This code is setting up the Redux store to work with data fetched from the TMDb API.
//  The tmdbApi reducer, which is part of the Redux store, will automatically handle the state related to the
//API data, including loading, success, and error states.
// This allows you to easily manage and access the API data in your application's components.






