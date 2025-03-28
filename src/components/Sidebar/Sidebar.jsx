import { useEffect } from "react";
import { Divider, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Box, CircularProgress } from "@mui/material";

import { Link } from 'react-router-dom';
import { useTheme } from "@mui/styles";

import { useDispatch, useSelector } from "react-redux";

import { useGetGenresQuery } from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

import genreIcons from '../../assets/genres';
import useStyles from './styles';

const Categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];





const Sidebar = ({ setMobileOpen }) => {
    const classes = useStyles();
    const theme = useTheme();
    const { data, isFetching } = useGetGenresQuery();
    const dispatch = useDispatch();
    // const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory)

    return (
        <>
            <Link to='/' className={classes.imageLink}>
                <img
                    className={classes.image}
                    src="https://fontmeme.com/permalink/231026/255859c2aadb382e2048ace9cd9e85ca.png"
                    alt="cinebot logo"
                />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {Categories.map(({ label, value }) => (
                    <Link key={value} className={classes.links} to="/">

                        <ListItem onClick={() => { dispatch(selectGenreOrCategory(value)) }} >
                            {/* So on Click of this ListItem , I want to dispatch(trigger) action of selectGenereOrCategory from 
                            currentgenreOrCategory slice, and the payload which is to be sent is value*/}

                            <ListItemIcon >
                                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImage} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={label} />

                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />

            <List>
                <ListSubheader>Geners</ListSubheader>
                {isFetching ? (
                    <Box display='flex' justifyContent='center'>
                        <CircularProgress />
                    </Box>
                ) : (data.genres.map(({ name, id }) => (
                    <Link key={id} className={classes.links} to="/">

                        <ListItem onClick={() => { dispatch(selectGenreOrCategory(id)) }} >

                            <ListItemIcon >
                                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImage} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={name} />

                        </ListItem>
                    </Link>
                )))}
            </List>
        </>


    )
}
export default Sidebar;