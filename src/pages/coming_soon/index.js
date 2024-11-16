import React, { useRef } from 'react';
import useStyles from './styles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactComponent as Logo } from '../../assets/image/H.o.N HOUSE OF NAMOR.svg';

const ComingSoon = () => {
    const classes = useStyles()

    const containerRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({defaults: { ease: 'power4.out', duration: .7 }})



    }, { dependencies: [], scope: containerRef })

    return (
        <div className={classes.container} ref={containerRef}>
            <div>
                <Logo />
            </div>
        </div>
    )
}

export default ComingSoon;