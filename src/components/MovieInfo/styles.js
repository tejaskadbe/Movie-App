import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({

    containerSpaceAround: {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 20px !important',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            flexwrap: 'wrap',
        },
    },
    poster: {
        borderRadius: '20px',
        boxShadow: '0.5em 1em 1em rgb(64,64,70)',
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '50%',

            margin: '0 auto',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '300px',
            marginBottom: '30px',
        },

    },
    genresContainer: {
        margin: '10px 0 !important',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    genreImage: {
        filter: theme.palette.mode === 'dark' && 'invert(1)'

    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            padding: '0.5rem 1rem',
        }
    },
    castImage: {
        width: '100%',
        maxWidth: '7em',
        height: '8em',
        objectFit: 'cover',
        borderRadius: '10px',

    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '8px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        width: '50%',
        height: '50%',
        [theme.breakpoints.down('sm')]: {

            width: '90%',
            height: '90%',
        }
    }
}));

