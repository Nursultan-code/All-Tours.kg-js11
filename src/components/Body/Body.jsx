import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Carusel from '../Carusel/Carusel';
import Video2 from '../video/video2.mp4'
import Video1 from '../video/video1.webm'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({

    fullScreen: {
        position: 'relative'
    },

    fullScreenVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }

}))




export default function Body() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='md'>
                <div className={classes.fullScreen}>
                    <div className={classes.fullScreenContent}>
                        <div className={classes.BodyfullScreenTitle} >ТУРЫ</div>
                        <div className={classes.fullScreenText}>Это крутяк</div>
                    </div>
                </div>
                <video className={classes.fullScreenVideo} autoPlay loop muted
                // style={{
                //     width: '100vw',
                //     height: 800,
                //     marginTop: '-220px',

                //     marginLeft: '-109px'

                // }}
                >
                    <source src={Video2} type="video/mp4" />
                    <source src={Video1} type="video/webm" />
                </video>
                <div>Туры</div>
            </Container>
            {/* <Container>
                <div className={classes.container}>
                    <Carusel />
                </div>

            </Container> */}

        </React.Fragment>




    );
}
