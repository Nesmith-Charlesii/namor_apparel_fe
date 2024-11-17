import React, { useRef } from 'react';
import useStyles from './styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactComponent as Logo } from '../../assets/image/Vector.svg';

const ComingSoon = () => {
    const classes = useStyles()

    const containerRef = useRef()
    const logoRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from('#hon .st1',
            { 
                opacity: 0,
                xPercent: -200, 
                rotatex: "270deg", 
                stagger: { each: 0.2 }, 
                duration: .7 
            }
        )

    }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} ref={containerRef}>
            <div>
                <Logo ref={logoRef}/>
            </div>
        </div>
    )
}

export default ComingSoon;