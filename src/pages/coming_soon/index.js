import React, { useRef } from 'react';
import useStyles from './styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactComponent as Logo } from '../../assets/image/pathVector.svg';

const ComingSoon = () => {
    const classes = useStyles()

    const containerRef = useRef()
    const logoRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.set('g', {
            autoAlpha: 1
        })

        tl.to('svg', {
            scale: 1.2,
            duration: 4
        })

        tl.from('#honLogo .acro',
            {
                opacity: 0,
                yPercent: 215,
                // skewY: 60,
                // skewX: 30,
                scaleY: .5,
                stagger: { each: .4, from: "end" }
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
                stagger: { each: 0.09, from: "end" }
            }, 0
        )



    }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} ref={containerRef}>
            <div>
                <Logo ref={logoRef} />
            </div>
        </div>
    )
}

export default ComingSoon;