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
    const titleContainer = useRef();

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to(
            titleAcronym.current.querySelector("div:nth-child(2)"),
            {
                opacity: 1,
                x: -100,
                y: 100,
                yoyo: true,
                repeat: 1,
                ease: "back.inOut",
                duration: 2,
                onComplete: () => {
                    gsap.to(
                        titleAcronym.current.querySelector("div:nth-child(2)"),
                        { filter: "blur(0px)", duration: 1 }
                    )
                }
            }, 0
        )
            .to(
                titleAcronym.current.querySelector("div:nth-child(4)"),
                {
                    opacity: 1,
                    x: 100,
                    y: -100,
                    yoyo: true,
                    repeat: 1,
                    ease: "back.inOut",
                    duration: 2,
                    onComplete: () => {
                        gsap.to(
                            titleAcronym.current.querySelector("div:nth-child(4)"),
                            { filter: "blur(0px)", duration: 1 }
                        )
                    }
                }, 0
            )
            .fromTo([
                titleAcronym.current.querySelector("div:nth-child(1)"),
                titleAcronym.current.querySelector("div:nth-child(3)"),
                titleAcronym.current.querySelector("div:nth-child(5)"),
                ],
                { y: 20, transform: "rotateX(270deg)" },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "rotateY(360deg)",
                    duration: 2,
                    stagger: 0.25
                }, 3
            )
    }, { dependencies: [], scope: container }, [])

    return (
        <div className={classes.container} ref={container}>
            <div className={classes.titleContainer} ref={titleContainer}>
                <div className={classes.titleAcronym} ref={titleAcronym}>
                    <div>H</div>
                    <div>.</div>
                    <div>o</div>
                    <div>.</div>
                    <div>N</div>
                </div>
                <div className={classes.titleName}>HOUSE of NAMOR</div>
            </div>
        </div>
    )
};

export default Home;