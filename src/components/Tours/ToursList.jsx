import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { TourContext } from '../Contexts/TourContext';
import TourCard from './TourCard';

const ToursList = () => {
    const { tours, getTours } = useContext(TourContext)
    console.log(tours);
    useEffect(() => {
        getTours()
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