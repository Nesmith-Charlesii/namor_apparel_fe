import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useStyles from './pageStyles';
import BackgroundVideo from '../../assets/video/background_vid.mp4';

const Home = () => {
    const classes = useStyles();

    const titleAcronym = useRef();
    const container = useRef();
    const titleContainer = useRef();
    const titleName = useRef();
    const backgroundVid = useRef();
    const overlay1 = useRef();
    const overlay2 = useRef();

    const titleText = "HOUSE of NAMOR";
    const letterArr = titleText.split("")

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            titleName.current,
            { x: -120, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power1.inOut" }, 0
        )
        .fromTo(
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
                stagger: { each: 0.1, from: "end" },
                duration: 2.5,
            }, 0
        )
        // 1st acronym period
        .fromTo(
            titleAcronym.current.querySelector("div:nth-child(2)"),
            {
                opacity: 0,
                y: -700,
                filter: "blur(10px)",
            }, 
            {   
                y: 0,
                opacity: 1,
                duration: 2.5,
                ease: "bounce.out",
                yoyo: true,
                stagger: { each: 0.2, from: "random" },
                onComplete: () => {
                    gsap.to(
                        titleAcronym.current.querySelector("div:nth-child(2)"),
                        { 
                            filter: "blur(0px)", 
                            duration: 1 
                        }
                    )
                }
            }, 0
        )
        // 2nd acronym period
        .fromTo(
            titleAcronym.current.querySelector("div:nth-child(4)"),
            {
                opacity: 0,
                y: -620,
                filter: "blur(10px)",
            }, 
            {   
                y: 0,
                opacity: 1,
                duration: 2.5,
                ease: "bounce.out",
                yoyo: true,
                stagger: { each: 0.2, from: "random" },
                onComplete: () => {
                    gsap.to(
                        titleAcronym.current.querySelector("div:nth-child(4)"),
                        { filter: "blur(0px)", duration: 1 }
                    )
                }
            }, 0.2
        )
        // Title Acronym Letters
        .fromTo(
            titleAcronym.current.querySelectorAll("div:nth-child(1), div:nth-child(3), div:nth-child(5)"),
            {
                y: 10,
                filter: "blur(10px)",
                opacity: 0,
            },
            {

                filter: "blur(0px)",
                opacity: 1,
                stagger: { each: 0.3, from: "random" },
                duration: 2.5,
            }, 1.5
        )
        // Background Video
        .fromTo(
            backgroundVid.current,
            { opacity: 0 },
            { opacity: .5, duration: 3 }
        )
        .to(
            overlay1.current,
            { y: window.innerHeight, duration: 1 }, "-=3"
        )
        .to(
            overlay2.current,
            { y: -window.innerHeight - 200, duration: 2 }, "-=2.8"
        )
    }, { dependencies: [], scope: container });

    return (
        <div className={classes.container} ref={container}>
            <div className={classes.backgroundOverlay}>
                <div className={classes.backgroundOverlay1} ref={overlay1}></div>
                <div className={classes.backgroundOverlay2} ref={overlay2}></div>
            </div>
            <div className={classes.video} ref={backgroundVid}>
                <video autoPlay muted loop>
                    <source src={BackgroundVideo} type="video/mp4"/>
                </video>
            </div>
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