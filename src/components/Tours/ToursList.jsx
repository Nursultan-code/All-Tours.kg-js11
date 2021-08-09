import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TourContext } from '../Contexts/TourContext';
import TourCard from './TourCard';

const ToursList = () => {
    const history = useHistory()
    const { tours, getTours } = useContext(TourContext)
    console.log(tours);
    useEffect(() => {
        getTours(history)
    }, [])
    return (
        <>
            <Grid container spacing={3} justify="space-evenly" style={{ marginTop: '90px' }}>
                {
                    tours ? (
                        tours.map((item, index) => (
                            <TourCard item={item} key={index} />
                        ))
                    ) : (<h1>Please wait...</h1>)
                }
            </Grid>

        </>
    );
};

export default ToursList;