import React, { useRef } from 'react';
import useStyles from './styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactComponent as Logo } from '../../assets/image/pathVector.svg';

const ComingSoon = () => {
    const classes = useStyles()

    const titleText = "HOUSE of NAMOR";
    const letterArr = titleText.split("")

    const containerRef = useRef()
    const titleContainer = useRef();
    const titleAcronym = useRef();
    const titleName = useRef();
    const comingRef = useRef()
    const soonRef = useRef()

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
                duration: 2,
                ease: "sine.in",
            }, 
        );

        tl.to(
            soonRef.current,
            {
                opacity: 0.3,
                duration: 2,
                ease: "sine.in",
            }, "-=1"
        );

        tl.to('.letter',
            {
                opacity: 1,
                filter: "blur(4px)",
                stagger: { each: .06, from: "random" },
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
                ease: "sine.out"
            }
        )

    }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} ref={containerRef}>
            <div className={classes.pageContent}>
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
        </div>
    )
}

export default ComingSoon;