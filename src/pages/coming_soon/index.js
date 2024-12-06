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
    const comingSoonRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.set('g', {
            autoAlpha: 1
        })

        tl.to(titleContainer.current, 
            {
                scale: 1.2,
                duration: 8,
                ease: "sine.inOut",
            }, 0
        )

        tl.from(titleAcronym.current.querySelectorAll("div:nth-child(1), div:nth-child(3), div:nth-child(5)"),
            {
                filter: "blur(10px)",
                opacity: 0,
                yPercent: 215,
                scaleY: .5,
                skewY: 60,
                skewX: 30,
                stagger: { each: .45, from: "end" },
            }, 0
        )

        tl.from(titleAcronym.current.querySelector("div:nth-child(2)"),
            {
                filter: "blur(10px)",
                scale: 0,
            }, 0.7
        )

        tl.from(titleAcronym.current.querySelector("div:nth-child(4)"),
        {
            filter: "blur(10px)",
            scale: 0
        }, 0.2
    )

        tl.from(".letter",
            {
                filter: "blur(10px)",
                opacity: 0,
                yPercent: -200, 
                stagger: { each: 0.1, from: "end" },
            }, 0
        )

        tl.to(
            comingSoonRef.current,
            {
                opacity: 1,
                duration: 2,
                ease: "sine.in",
            }, "-=1"
        );

        tl.to('.letter',
            {
                opacity: 1,
                filter: "blur(2px)",
                stagger: { each: .06, from: "random" },
                repeat: -1,
                repeatDelay: 2,
                yoyo: true,
                ease: "sine.out"
            }
        )

    }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} ref={containerRef}>
            <div className={classes.pageContent}>
                <h2 className={classes.comingSoon} ref={comingSoonRef}>COMING</h2>
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
                <h2 className={classes.comingSoon}>SOON</h2>
            </div>
        </div>
    )
}

export default ComingSoon;