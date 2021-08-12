import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Carusel from '../Carusel/Carusel';
import Video2 from '../video/video2.mp4'
import Video1 from '../video/video1.webm'
import { makeStyles } from '@material-ui/styles';
import TourCard from '../Tours/TourCard';
import ToursList from '../Tours/ToursList';
import toursCarusel from './toursCarusel'
import Footer from './Footer';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    fullScreen: {
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        // padding: '50px, 15px'
    },

    fullScreenVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        marginTop: '-220px',
    },
    fullScreenContent: {
        padding: '50px, 15px',
        backgroundColor: 'rgba(52, 52, 52, 0.4)',

        width: '1450px',
        height: '547px',


        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flex: "1, 1, auto",
        justifyContent: 'center',
        alignItems: 'center ',
        flexDirection: 'column',
        textTransform: 'uppercase',
        marginTop: "-55px",
        marginLeft: '-270px'

    },
    BodyfullScreenTitle: {
        fontSize: '50px',
        letterSpacing: '17px',
        fontWeight: 700,
        margin: '0px, 0ps, 20px, 0px',
        color: 'white'
    },
    fullScreenText: {
        fontSize: '18px',
        letterSpacing: '15px',
        color: 'white'
    },
    content: {
        backgroundColor: 'brown',
        margin: 0
    },



    aboutContent: {
        display: 'flex',
        // alignItems: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',

        // position: 'relative',
        // display: 'flex',
        // justifyContent: 'space-between'
    },
    rightContent: {
        // marginTop: '-180px',
        // marginLeft: '180px',
        // marginRight: '-100px'

    },
    textAbout: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 700
    },
    titleAbout: {
        color: 'white',
        fontSize: '23px',
        marginBottom: '25px',
        width: '400px',
        paddingBottom: '30px',
        fontWeight: 700
    },
    leftContent: {
        // marginTop: '-110px',
        width: '70vw',
        // marginRight: '100px',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        paddingBottom: '30px',
        lineHeight: 1.5,
        marginTop: '50px'

    },
    topContent: {
        // paddingBottom: '80px',
        display: 'flex',
        width: '60px',
        height: '60px',
        backgroundSize: '60px 60px',
        backgroundImage: 'url(https://triptokyrgyzstan.com/themes/custom/tripping/images/kyrgyzstan_flag_tunduk.svg)',
        // justifyContent: 'center',
        // left: 0,
        // right: 0,
        // position: 'absolute',
    }


}))




export default function Body() {
    const classes = useStyles()

    return (
        <Grid>
            <Container maxWidth='md' >
                <div className={classes.fullScreen}>
                    <div className={classes.fullScreenContent}>
                        <div className={classes.BodyfullScreenTitle} >кыргызстан</div>
                        <div className={classes.fullScreenText}>Добро пожаловать</div>
                    </div>
                </div>

                <video className={classes.fullScreenVideo} autoPlay loop muted
                //     style={{
                //         width: '100vw',
                //         height: 800,
                //         marginTop: '-220px',

                //         marginLeft: '-109px'

                //     }}
                >
                    <source src={Video2} type="video/mp4" />
                    <source src={Video1} type="video/webm" />
                </video>

                <div className={classes.aboutContent}>
                    <div className={classes.topContent}></div>
                    <div className={classes.leftContent}>

                        Добро пожаловать в Кыргызстан, страну величественных горных ландшафтов и живописных долин, <br /> кристально чистых озер и мощных горных рек, белоснежных ледников и изумрудно-зеленых лугов, <br /> которая находится в самом сердце Центральной Азии. Это уникальное место, где природа <br /> сохранилась в своем первозданном виде, и люди пережили эпоху своей культуры и самобытности. <br /> Кыргызстан - рай для путешественников, которые хотят открыть для себя новые горизонты, <br /> познакомиться с миром природы и с необычной культурой страны. Кыргызский народ с древних <br /> времен были известны своим теплом и гостеприимством. Мы приглашаем вас посетить Кыргызстан, <br /> и он не оставит вас равнодушными!
                    </div>

                    {/* <div className={classes.leftContent}>
                    <div className={classes.titleAbout}>О нас</div>
                    <div className={classes.textAbout}>Мы занимаемся походами по Кыргызстану <br /> С нами вы проведете свое время с комфортом <br /> Организовываем туры уже более 10 лет<br /> delectus cum necessitatibus ipsam repudiandae? Atque, fuga.</div>
                </div> */}
                    <div className={classes.rightContent}>
                        <Carusel maxWidth="md" className={classes.content} />

                    </div>
                </div>

                <Container maxWidth="md" style={{
                    paddingTop: '30px'
                }}>
                    <h2 style={{
                        color: 'white',

                    }}>
                        Наши туры
                    </h2>
                    <div className={classes.contentOfBody}>
                        <ToursList />


                    </div>
                </Container>
                <Footer />

            </Container >

        </Grid>





    );
}
