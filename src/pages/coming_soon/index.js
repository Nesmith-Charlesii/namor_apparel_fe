import React, { useRef } from 'react';
import useStyles from './styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Insta from '../../assets/image/insta_logo_icon.png';
import TikTok from '../../assets/image/tok_tiktok_icon2.png';
import asset1 from '../../assets/image/asset.jpeg';
import asset2 from '../../assets/image/asset6.jpeg';
import asset3 from '../../assets/image/asset5.jpeg';

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
    //const signupRef = useReft();
 
    const tikTokLink = "https://www.tiktok.com/@house_of_namor"
    const instaLink = "https://www.instagram.com/house_of_namor/"

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.set('g', {
            autoAlpha: 1
        })

        // tl.to(titleContainer.current, 
        //     {
        //         scale: 1.2,
        //         duration: 4,
        //         ease: "expo.inOut",
        //     }, 0
        // )

        tl.from(titleAcronym.current.querySelectorAll("div:nth-child(1), div:nth-child(3), div:nth-child(5)"),
            {
                filter: "blur(10px)",
                opacity: 0,
                yPercent: 90,
                scaleY: .5,
                skewY: 60,
                skewX: 30,
                stagger: { each: .5, from: "end" },
                delay: 1
            }, 0
        )

        tl.from(titleAcronym.current.querySelector("div:nth-child(2)"),
            {
                filter: "blur(10px)",
                scale: 0,
                delay: 1
            }, 0.7
        )

        tl.from(titleAcronym.current.querySelector("div:nth-child(4)"),
        {
            filter: "blur(10px)",
            scale: 0,
            delay: 1
        }, 0.2
    )

        tl.from(".letter",
            {
                filter: "blur(10px)",
                opacity: 0,
                yPercent: -200, 
                stagger: { each: 0.09, from: "end" },
                delay: 1
            }, 0
        )

        tl.to(
            comingRef.current,
            {
                opacity: .3,
                duration: 1,
                ease: "sine.in",
            }, 
        );

        tl.to(
            soonRef.current,
            {
                opacity: .3,
                duration: 1,
                ease: "sine.in",
            }, "-=.5"
        );

        tl.from(tiktokRef.current,
            {
                opacity: 0,
                y: 400
            }
        )

        tl.from(instaRef.current,
            {
                opacity: 0,
                y: 400
            }
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
            }, "-=.5"
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
            }
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
            }
        )

    }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} ref={containerRef}>
            <div className={classes.backgroundImage}>
                <img src={asset1} alt="bgImage" style={{height: "100vh",}}></img>
            </div>
            <div className={classes.signUp}>
                <p>Sign Up</p>
            </div>
            <div className={classes.pageContent}>
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
                <div className={classes.socials}>
                    <div>  
                        <a href={tikTokLink} target='_blank' rel="noreferrer">
                            <img src={TikTok} alt="social-tiktok" className={classes.tiktok} ref={tiktokRef} /> 
                        </a>
                    </div>
                    <div> 
                        <a href={instaLink} target='_blank' rel="noreferrer">
                            <img src={Insta} alt="social-insta" className={classes.insta} ref={instaRef}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;