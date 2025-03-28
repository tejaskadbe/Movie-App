

import { TextField, InputAdornment, Input } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import useStyles from './styles';
import { useState } from "react";
import { searchMovie } from '../../features/currentGenreOrCategory';
const Search = () => {

    const [query, setQuery] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleKeyPress = (event) => {
        if (event.key === "Enter")
            dispatch(searchMovie(query));

    }
    return (
        <div className={classes.searchContainer}>
            <TextField
                onKeyDown={handleKeyPress}
                value={query}
                variant='standard'
                onChange={(e) => setQuery(e.target.value)}
                InputProps={{
                    className: classes.input,
                    startAdornment: (

                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>


                    ),
                }}

            />


        </div>
    )
};

export default Search;