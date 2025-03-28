import { createSlice } from "@reduxjs/toolkit";


export const genreOrCategory = createSlice({


    name: 'genreOrCategory',
    initialState: {
        genreIdOrCategoryName: '',
        page: 1,
        searchQuery: '',
    },

    reducers: {
        selectGenreOrCategory: (state, action) => {
            state.genreIdOrCategoryName = action.payload;
            state.searchQuery = '';
            // Reseting the previous searchQuery assignments of global state
        },
        searchMovie: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
});


//Exporting actions 
export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;