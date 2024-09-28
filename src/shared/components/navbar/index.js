import React, { useRef } from 'react';
import useStyles from './pageStyles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const classes = useStyles()

    const navbar = useRef()
    const navbarLinks = useRef()

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.fromTo(
            navbarLinks.current.querySelectorAll("div:nth-child(1),div:nth-child(2),div:nth-child(3),div:nth-child(4),div:nth-child(5)"),
            { y: 10, 
                opacity: 0, 
                transform: "rotateX(270deg)" 
            },
            { 
                y: 0, 
                stagger: { each: 0.2, from: "random" }, 
                opacity: 1, transform: "rotateX(0deg)", 
                duration: .5,
                delay: 2
            }
        )
    })

    return (
        <div className={classes.navbar} ref={navbar}>
            <div className={classes.navLinks} ref={navbarLinks}>
                <div>Home</div>
                <div>Shop</div>
                <div>H.o.N</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default Navbar