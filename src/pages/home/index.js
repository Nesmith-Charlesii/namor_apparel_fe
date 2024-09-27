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
    const titleName = useRef();

    const titleText = "HOUSE of NAMOR";
    const letterArr = titleText.split("")

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            titleName.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 3, ease: "power1.inOut" }, 0
        )
        tl.fromTo(
            titleAcronym.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 3, ease: "power1.inOut" }, 0
        )
        tl.fromTo(
            ".letter",
            {
                opacity: 0,
                transform: "rotateY(270deg)",
                filter: "blur(10px)",
            },
            {
                opacity: 1,
                filter: "blur(0px)",
                transform: "rotateY(0deg)",
                ease: "sine.inOut",
                stagger: { each: 0.1, from: "random" },
                duration: 2.5,
            }, 0
        )
        // 1st acronym period
        .fromTo(
            titleAcronym.current.querySelector("div:nth-child(2)"),
            {
                opacity: 0,
                y: -500,
                filter: "blur(10px)",
            }, 
            {   
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "bounce.out",
                yoyo: true,
                stagger: { each: 0.2, from: "random" },
                onComplete: () => {
                    gsap.to(
                        titleAcronym.current.querySelector("div:nth-child(2)"),
                        { filter: "blur(0px)", duration: 1 }
                    )
                }
            }, "-=2"
        )
        // 2nd acronym period
        .fromTo(
            titleAcronym.current.querySelector("div:nth-child(4)"),
            {
                opacity: 0,
                y: -420,
                filter: "blur(10px)",
            }, 
            {   
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "bounce.out",
                yoyo: true,
                stagger: { each: 0.2, from: "random" },
                onComplete: () => {
                    gsap.to(
                        titleAcronym.current.querySelector("div:nth-child(4)"),
                        { filter: "blur(0px)", duration: 1 }
                    )
                }
            }, 0
        )
        // Title Acronym Letters
        .fromTo(
            titleAcronym.current.querySelectorAll("div:nth-child(1), div:nth-child(3), div:nth-child(5)"),
            {
                filter: "blur(10px)",
                opacity: 0,
            },
            {
                filter: "blur(0px)",
                opacity: 1,
                stagger: { each: 0.3, from: "random" },
                duration: 2,
            }, "-=1"
        )

    }, { dependencies: [], scope: container });

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
                <div className={classes.titleName} ref={titleName}>
                    {
                        letterArr.map((letter, index) => (
                            <div className='letter' key={index}>{letter === "E" || letter === "f" ? letter + "\u00A0" : letter}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;