import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({

    toolbar: {
        background: 'black',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px',


        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
            flexWrap: 'wrap',
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        outline: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },

    drawerPaper: {
        width: '240px',
        [theme.breakpoints.up('sm')]: {
            width: '240px',
            flexShrink: 0,
        },

    },
    linkButton: {
        '&:hover': {
            color: 'white ! important',
            textDecoration: 'none',
        },
    },
}
));

