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
    const titleName = useRef();

    const titleText = "HOUSE of NAMOR";
    const letterArr = titleText.split("")

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".letter",
            { opacity: 0, filter: "blur(5px)", transform: "rotateX(270deg)" },
            { opacity: 1, filter: "blur(0px)", transform: "rotateX(0deg)", stagger: 0.2, duration: 2}
        )

    }, { dependencies: [], scope: container });

    return (
        <div className={classes.container} ref={container}>
            <div className={classes.titleContainer}>
                <div className={classes.titleAcronym} ref={titleAcronym}>
                    <div>H</div>
                    <div>.</div>
                    <div>o</div>
                    <div>.</div>
                    <div>N</div>
                </div>
                <div className={classes.titleName} ref={titleName}>
                    {
                        letterArr.map((letter, index) => (
                            <span className='letter'>{letter}</span>
                        ))
                    }
                </div>
                {/* <div className={classes.titleName} ref={titleName}>HOUSE of NAMOR</div> */}
            </div>
        </div>
    );
};

export default Home;