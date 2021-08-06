import { Grid } from '@material-ui/core';
import React from 'react';
import ToursList from '../Tours/ToursList';

const content = () => {
    return (
        <Grid item md={9}>
            <ToursList />
        </Grid>
    );
};

export default content;