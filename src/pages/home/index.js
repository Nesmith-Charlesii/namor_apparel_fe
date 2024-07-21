import React from 'react';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1>NAMOR APPAREL</h1>
        </div>
    )
};

export default Home;