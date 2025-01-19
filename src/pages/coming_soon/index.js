import React, { useRef } from 'react';
import useStyles from './styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Insta from '../../assets/image/insta_logo_icon.png';
import TikTok from '../../assets/image/tok_tiktok_icon2.png';

const ComingSoon = () => {
    const classes = useStyles()

    const titleText = "HOUSE of NAMOR";
    const letterArr = titleText.split("")

    const containerRef = useRef()
    const titleContainer = useRef();
    const titleAcronym = useRef();
    const titleName = useRef();
    const comingRef = useRef();
    const soonRef = useRef();
    const instaRef = useRef();
    const tiktokRef = useRef();
    const letterBoxTopRef = useRef();
    const letterBoxBottomRef = useRef();
    const borderRef = useRef();
 
    const tikTokLink = "https://www.tiktok.com/@house_of_namor"
    const instaLink = "https://www.instagram.com/house_of_namor/"

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to(borderRef.current,
            {
                width: "100vw",
                duration: 2,
                ease: "bounce.in"
            }
        )

        tl.to(borderRef.current,
            {
                width: "0vw",
                duration: .5
            }
        )

        tl.to(letterBoxTopRef.current, 
            {
                delay: 2,
                y: "-43vh",
                duration: 10,
                ease: "sine.out"
            }, 0
        )

        tl.to(letterBoxBottomRef.current, 
            {
                delay: 2,
                y: "43vh",
                duration: 10,
                ease: "sine.out"
            }, 0
        )

        tl.to(containerRef.current,
            {
                backgroundColor: "#f2f0ef",
                duration: 2,
                ease: "power1.out"
            }, "-=8.7"
        )

        tl.to(titleContainer.current, 
            {
                scale: .9,
                duration: 6,
                ease: "sine.inOut",
            }, "-=8.5"
        )

        tl.from(".letter",
            {
                filter: "blur(10px)",
                opacity: 0,
                yPercent: -200, 
                stagger: { each: 0.15, from: "start" },
            }, "-=8.5"
        )

        tl.from(titleAcronym.current.querySelectorAll("div:nth-child(1), div:nth-child(3), div:nth-child(5)"),
            {
                filter: "blur(15px)",
                opacity: 0,
                yPercent: 90,
                scaleY: .5,
                skewY: 60,
                skewX: 30,
                stagger: { each: .7, from: "end" }
            }, "-=8"
        )

        // Left period
        tl.from(titleAcronym.current.querySelector("div:nth-child(2)"),
            {
                filter: "blur(10px)",
                scale: 0,
            }, "-=6.2"
        )
        // Right period
        tl.from(titleAcronym.current.querySelector("div:nth-child(4)"),
            {
                filter: "blur(10px)",
                scale: 0,
            }, "-=6.5"
        )

        tl.to(
            comingRef.current,
            {
                opacity: .4,
                duration: 1,
                ease: "sine.in",
            }, "-=2"
        );

        tl.to(
            soonRef.current,
            {
                opacity: .4,
                duration: 1,
                ease: "sine.in",
            }, "-=1"
        );

        tl.from(tiktokRef.current,
            {
                ease: "power2.inOut",
                opacity: 0,
                y: 400,
                duration: 2
            }, "-=1"
        )

        tl.from(instaRef.current,
            {
                ease: "power2.inOut",
                opacity: 0,
                y: 400,
                duration: 2
            }, "-=1.2"
        )

        tl.to(tiktokRef.current,
            {
                ease: "bounce.out",
                repeat: -1,
                repeatDelay: 3,
                duration: 3,
                rotate: 360
            }, "-=1"
        )

        tl.to(instaRef.current,
            {
                ease: "bounce.out",
                repeat: -1,
                repeatDelay: 3,
                duration: 3,
                rotate: -360
            }, "-=.8"
        )

        tl.to(tiktokRef.current,
            {
                zIndex: 2
            }, "-=4"
        )

        tl.to(instaRef.current,
            {
                zIndex: 2
            }, "-=4"
        )

        tl.to('.letter',
            {
                opacity: 1,
                filter: "drop-shadow(2px 10px 5px grey)",
                stagger: { each: .09, from: "random" },
                repeat: -1,
                repeatDelay: 2,
                yoyo: true,
                ease: "sine.out"
            }, "+=2"
        )

        tl.to(titleAcronym.current.querySelectorAll("div:nth-child(1), div:nth-child(3), div:nth-child(5)"),
            {
                opacity: 1,
                filter: "drop-shadow(2px 10px 5px grey)",
                stagger: { each: .1, from: "random" },
                repeat: -1,
                repeatDelay: 2,
                yoyo: true,
                ease: "sine.out"
            }, "+=2"
        )

    }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} ref={containerRef}>
            <div className={classes.border} ref={borderRef}></div>
            <div className={classes.letterBoxing}>
                <div className={classes.topBorder} ref={letterBoxTopRef}>

                </div>
                <div className={classes.bottomBorder} ref={letterBoxBottomRef}>
                    
                </div>
            </div>
            <div className={
                isSmallerScreen ? classes.pageContentPhone : 
                isSmallScreen ? classes.pageContentTablet : classes.pageContent
            }>
                <div className={classes.mainText}>
                    <div className={classes.comingSoon} ref={comingRef}>COMING</div>
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
                    <div className={classes.comingSoon} ref={soonRef}>SOON</div>
                </div>
                <div className={
                    isSmallerScreen ? classes.socialsPhone : 
                    isSmallScreen ? classes.socialsTablet : classes.socials
                    }>
                    <div>  
                        <a href={tikTokLink} target='_blank' rel="noreferrer">
                            <img 
                            src={TikTok} 
                            alt="social-tiktok" 
                            className={
                                isSmallerScreen ? classes.tiktokPhone :
                                isSmallScreen ? classes.tiktokTablet : classes.tiktok
                            } 
                            ref={tiktokRef} /> 
                        </a>
                    </div>
                    <div> 
                        <a href={instaLink} target='_blank' rel="noreferrer">
                            <img 
                            src={Insta} 
                            alt="social-insta" 
                            className={
                                isSmallerScreen ? classes.instaPhone :
                                isSmallScreen ? classes.instaTablet : classes.insta
                            } 
                            ref={instaRef}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;