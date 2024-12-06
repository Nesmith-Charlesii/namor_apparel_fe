import React, { useRef } from 'react';
import useStyles from './styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactComponent as Logo } from '../../assets/image/pathVector.svg';

const ComingSoon = () => {
    const classes = useStyles()

    const titleText = "HOUSE of NAMOR";
    const letterArr = titleText.split("")

    // const containerRef = useRef()
    const titleContainer = useRef();
    const titleAcronym = useRef();
    // const comingSoonRef = useRef()

    // useGSAP(() => {
    //     const tl = gsap.timeline()

    //     tl.set('g', {
    //         autoAlpha: 1
    //     })

    //     tl.to('svg', {
    //         scale: 1.2,
    //         duration: 6,
    //         ease: "power1.out",
    //         delay: 2
    //     })

    //     tl.from('#honLogo .acro',
    //         {
    //             filter: "blur(10px)",
    //             opacity: 0,
    //             yPercent: 215,
    //             scaleY: .5,
    //             skewY: 60,
    //             skewX: 30,
    //             stagger: { each: .5, from: "end" },
    //             delay: 2
    //         }, 0
    //     )

    //     tl.from('#honLogo .period',
    //         {
    //             filter: "blur(10px)",
    //             scale: 0,
    //             stagger: { each: .3, from: "start" },
    //             delay: 2
    //         }, 0
    //     )

    //     tl.from('#honLogo .st1',
    //         {
    //             filter: "blur(10px)",
    //             opacity: 0,
    //             yPercent: -200, 
    //             stagger: { each: 0.1, from: "end" },
    //             delay: 2
    //         }, 0
    //     )

    //     tl.to(
    //         comingSoonRef.current,
    //         {
    //             opacity: 1,
    //             duration: 2,
    //             ease: "sine.in",
    //         }, "-=1"
    //     );

    //     tl.to('#honLogo path',
    //         {
    //             opacity: 0.7,
    //             filter: "blur(2px)",
    //             stagger: { each: .07, from: "random" },
    //             repeat: -1,
    //             repeatDelay: 1,
    //             yoyo: true,
    //             ease: "sine.out"
    //         }, "-=2"
    //     )

    // }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} /*ref={containerRef}*/>
            <div className={classes.pageContent} /*ref={comingSoonRef}*/>
                <h2 className={classes.comingSoon}>COMING</h2>
                <div className={classes.titleContainer} ref={titleContainer}>
                    <div className={classes.titleAcronym} ref={titleAcronym}>
                        <div>H</div>
                        <div>.</div>
                        <div>o</div>
                        <div>.</div>
                        <div>N</div>
                    </div>
                </div>
                <h2 className={classes.comingSoon}>SOON</h2>
            </div>
        </div>
    )
}

export default ComingSoon;