import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({

    movie: {
        padding: '10px'
    },
    links: {
        alignItems: 'center',
        fontWeight: 'bolder',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column'
        },
        '&:hover ': {
            cursor: 'pointer',

            textDecoration: 'underline'
        },
    },
    image: {
        borderRadius: '20px',
        height: '300px',
        marginTop: '40px',
        marginBottom: '10px',
        '&:hover ': {
            transform: 'scale(1.05)'
        }
    },



    title: {
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '230px',
        whitespace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',



    },

}));

