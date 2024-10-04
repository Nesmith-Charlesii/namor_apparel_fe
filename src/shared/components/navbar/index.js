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
            navbarLinks.current.querySelectorAll("div:nth-child(1),div:nth-child(2),div:nth-child(3),div:nth-child(4), div:nth-child(5)"),
            { 
                y: -50, 
                opacity: 0,  
            },
            { 
                y: 0, 
                stagger: { each: 0.2, from: "start" }, 
                opacity: .5, 
                duration: .5,
                delay: 3.5
            }
        )
    })

    return (
        <div className={classes.navbar} ref={navbar}>
            <div className={classes.navLinks} ref={navbarLinks}>
                <div>HOME</div>
                <div>SHOWCASE</div>
                <div>SHOP</div>
                <div>ABOUT</div>
                <div>INQUIRE</div>
            </div>
        </div>
    )
}

export default Navbar