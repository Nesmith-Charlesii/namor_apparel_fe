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
            scale: 1.3,
            duration: 3,
            ease: "sine.inOut"
        })

        tl.from('#honLogo .acro',
            {
                opacity: 0,
                yPercent: 215,
                scaleY: .5,
                stagger: { each: .4, from: "start" },
            }, 0
        )

        tl.from('#honLogo .period',
            {
                filter: "blur(10px)",
                scale: 0,
                stagger: { each: .4, from: "start" }
            }, 0
        )

        tl.from('#honLogo .st1',
            {
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
                opacity: .3,
                duration: 2
            }, "-=2"
        )

        tl.to('#honLogo path',
            {
                fill: "rgb(235,235,235)",
                stagger: { each: .09, from: "random" },
                repeat: -1,
                yoyo: true,
                yoyoEase: "power1.inOut",
                repeatDelay: 5,
                ease: "power2.inOut"
            }, "+=2"
        )

        tl.to('#honLogo path',
            {
                opacity: 0.5,
                filter: "blur(5px)",
                stagger: { each: .09, from: "random" },
                repeat: -1,
                repeatDelay: .2,
                yoyo: true,
                ease: "power2.inOut"
            }, "-=2"
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