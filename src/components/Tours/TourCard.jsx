import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useContext } from 'react';
import { TourContext } from '../Contexts/TourContext';
import Edit from '../Admin/Edit';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        marginTop: 20,
        width: '400px',
        height: '600px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        width: '400px',


    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function TourCard({ item }) {
    const classes = useStyles();

    const { getTours, deleteTour, addTourInCart, checkTourInCart } = useContext(TourContext)
    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    let history = useHistory()
    let icons = (
        <CardActions>
            <Link to={`/edit/${item.id}`}>
                <IconButton>
                    <Button>Изменить</Button>
                </IconButton>
            </Link>
            <IconButton onClick={() => deleteTour(item.id, history)}>
                <DeleteIcon />
            </IconButton>
            <IconButton
                aria-label='share'
                onClick={() => addTourInCart(item)}
                color={checkTourInCart(item.id) ? "secondary" : "inherit"}
            >
                <ShoppingCartIcon />
            </IconButton>
        </CardActions>
    )


    return (
        <Card className={classes.root}>
            <CardHeader
                title={item.title}
                subheader={item.type}
            />
            <CardMedia
                className={classes.media}
                image={item.image}

                title="Beautiful"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {item.price}
                </Typography>

            </CardContent>
            {icons}
        </Card >
    );
}
