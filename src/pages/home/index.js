import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useStyles from './pageStyles';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(useGSAP, Observer);

const Home = () => {
    const classes = useStyles();
    const titleAcronym = useRef();
    const container = useRef();
    
    useGSAP(() => {
        Observer.create({
            target: window,
            type: "wheel, scroll",
            onChange: () => { 
                gsap.to(titleAcronym.current, { 
                    transform: "scale(14)",
                    duration: 2 
                })
            }
        })
    });

    return (
        <div className={ classes.container } ref={container}>
           <div className={ classes.titleContainer }>
            <p className={ classes.titleAcronym } ref={titleAcronym}>
                <span>H</span>
                <span>.</span>
                <span>o</span>
                <span>.</span>
                <span>N</span>
            </p>
            <p className={ classes.titleName }>HOUSE of NAMOR</p>
           </div>
        </div>
    )
};

export default Home;