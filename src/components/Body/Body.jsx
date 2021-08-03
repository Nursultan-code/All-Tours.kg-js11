import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Carusel from '../Carusel/Carusel';

export default function Body() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: 'rgb(254,235,160)', height: '100vh' }}>

                    <Carusel />
                </Typography>
            </Container>
        </React.Fragment>
    );
}
