import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Carusel from '../Carusel/Carusel';
import Video2 from '../video/video2.mp4'



export default function Body() {
    return (
        <div>

            <video className="videoTag" autoPlay loop muted
                style={{
                    width: 1000,
                    height: 400,
                }}
            >
                <source src={Video2} type="video/mp4" />
            </video>

            <Carusel />
        </div>




    );
}
