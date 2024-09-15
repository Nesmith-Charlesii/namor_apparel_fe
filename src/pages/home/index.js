import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useStyles from './pageStyles';

gsap.registerPlugin(useGSAP)

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
           <div className={classes.titleContainer}>
            <p className={classes.titleAcronym}>
                <span>H</span>
                <span>.</span>
                <span>o</span>
                <span>.</span>
                <span>N</span>
            </p>
            <p className={classes.titleName}>HOUSE of NAMOR</p>
           </div>
        </div>
    )
};

export default Home;