import { Link } from '@material-ui/core';
import React from 'react';
import { API } from '../helpers/constants';
import ToursList from '../Tours/ToursList';
import Add from './Add'

const AdminPanell = () => {
    return (
        <div>
            <Link to={`${API}/admin`}>
                <Add />
                <ToursList />
            </Link>
        </div>
    );
};

export default AdminPanell;