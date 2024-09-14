import React from 'react';
import useStyles from './pageStyles';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
           <div className={classes.title}>
            <p>H.o.N</p>
            <p>HOUSE of NAMOR</p>
           </div>
        </div>
    )
};

export default Home;