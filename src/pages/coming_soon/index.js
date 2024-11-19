import React, { useRef } from 'react';
import useStyles from './styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactComponent as Logo } from '../../assets/image/pathVector.svg';

const ComingSoon = () => {
    const classes = useStyles()

    const containerRef = useRef()
    const logoRef = useRef()
    const comingSoonRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.set('g', {
            autoAlpha: 1
        })

        tl.to('svg', {
            scale: 1.2,
            duration: 3,
            ease: "sine.out"
        })

        tl.from('#honLogo .acro',
            {
                filter: "blur(10px)",
                opacity: 0,
                yPercent: 215,
                scaleY: .5,
                skewY: 60,
                skewX: 30,
                stagger: { each: .4, from: "end" },
            }, 0
        )

        tl.from('#honLogo .period',
            {
                filter: "blur(10px)",
                scale: 0,
                stagger: { each: .3, from: "start" },
            }, 0
        )

        tl.from('#honLogo .st1',
            {
                filter: "blur(10px)",
                opacity: 0,
                yPercent: -200, 
                stagger: { each: 0.09, from: "end" },
            }, 0
        )

        tl.fromTo(comingSoonRef.current,
            {
                opacity: 0,
            },
            {
                opacity: .5,
                duration: 2,
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
                yoyoEase: "sine.out",
                ease: "sine.out"
            }, 
        )

        tl.to('#honLogo path',
            {
                opacity: 0.7,
                filter: "blur(2px)",
                stagger: { each: .09, from: "random" },
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
                ease: "sine.out"
            }, 
        )

    }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} ref={containerRef}>
            <Logo className={classes.logo} ref={logoRef} />
            <div className={classes.comingSoon} ref={comingSoonRef}>
                <p>COMING</p>
                <p>SOON</p>         
            </div>
        </div>
    )
}

export default ComingSoon;