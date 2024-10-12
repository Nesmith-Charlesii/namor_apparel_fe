import React, { useRef, useState } from 'react';
import useStyles from './pageStyles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const classes = useStyles();
    //const [activeMenu, setActiveMenu] = useState(false);

    const navbar = useRef()
    //const navIcon = useRef()
    const navbarLinks = useRef()

    useGSAP(() => {
        const tl = gsap.timeline()

        // tl.fromTo(
        //     navIcon.current.querySelectorAll("div:nth-child(1), div:nth-child(2), div:nth-child(3)"),
        //     { y: -100 },
        //     { opacity: 1, y: 0, stagger: { each: 0.2, from: "start" }, ease: "back.inOut", duration: 1, delay: 4 }
        // )

        tl.fromTo(
            navbarLinks.current.querySelectorAll("div:nth-child(1),div:nth-child(2),div:nth-child(3),div:nth-child(4),div:nth-child(5)"),
            {   
                x: -120, 
                opacity: 0, 
                // transform: "rotateX(270deg)" 
            },
            { 
                x: 0, 
                stagger: { each: 0.2, from: "start" }, 
                ease: "back.out",
                opacity: .7 /*transform: "rotateX(0deg)"*/, 
                duration: 1,
                delay: 3
            }
        )
    }, { dependencies: [], scope: navbar })

    return (
        // <>
        //     {
        //         !activeMenu && 
        //         <div className={classes.navBar} ref= { navbar }>
        //             <div className={classes.navContent}>
        //                 <div className={classes.navLogo}>
        //                     logo placement
        //                 </div>
        //                 <div className={classes.navIcon} ref={ navIcon } onClick={ (e) => setActiveMenu(true) }>
        //                     <div className={classes.navLine}></div>
        //                     <div className={classes.navLine}></div>
        //                     <div className={classes.navLine}></div>
        //                 </div>
        //             </div>
        //         </div>
        //     }
        //     {
        //         activeMenu &&
        //         <div className={classes.nav}
        //     }
        // </>
       
        <div className={classes.navbar} ref={navbar}>
            <div className={classes.navLinks} ref={navbarLinks}>
                <div>HOME</div>
                <div>SHOWCASE</div>
                <div>SHOP</div>
                <div>ABOUT</div>
                <div>CONTACT</div>
            </div>
        </div>
    )
}

export default Navbar