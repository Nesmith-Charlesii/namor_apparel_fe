import React from 'react';
import BasicScene from './components/3jsBox';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <BasicScene />
            <div className={classes.title}>
                <h1>House of Namor</h1>
            </div>
        </div>
    )
};

export default Home;