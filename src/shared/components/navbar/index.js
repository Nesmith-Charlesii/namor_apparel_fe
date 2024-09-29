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
            navbarLinks.current.querySelectorAll("div:nth-child(1),div:nth-child(2),div:nth-child(4),div:nth-child(5)"),
            { 
                y: -50, 
                opacity: 0,  
            },
            { 
                y: 0, 
                stagger: { each: 0.2, from: "random" }, 
                opacity: 1, 
                duration: .5,
                delay: 3
            }
        )
        .fromTo(
            navbarLinks.current.querySelector("div:nth-child(3)"),
            { 
                opacity: 0, 
            },
            { 
                stagger: { each: 0.2, from: "random" }, 
                opacity: 1, 
                duration: 0.5,
                delay: 3
            }, 1
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