import React, { useRef, useState, useEffect } from 'react';
import useStyles from './pageStyles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image3 from "../../../assets/image/asset4.jpg";

const Navbar = () => {
    const classes = useStyles();
    const [activeMenu, setActiveMenu] = useState(false);

    const navbar = useRef()
    const navIcon = useRef()

    useEffect(() => {
        if(activeMenu === true){
            console.log(`active_menu: ${activeMenu}`)
        }
    }, [activeMenu])

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.fromTo(
            navIcon.current.querySelectorAll("div:nth-child(1), div:nth-child(2), div:nth-child(3)"),
            { y: -100 },
            { opacity: 1, y: 0, stagger: { each: 0.2, from: "start" }, ease: "back.inOut", duration: 1, delay: 4 }
        )
    }, { dependencies: [], scope: navbar })

    return (
        <>
            {
                !activeMenu && 
                <div className={classes.navBar} ref= { navbar }>
                    <div className={classes.navContent}>
                        <div className={classes.navLogo}>
                            logo placement
                        </div>
                        <div className={classes.navIcon} ref={ navIcon } onClick={ (e) => setActiveMenu(true) }>
                            <div className={classes.navLine}></div>
                            <div className={classes.navLine}></div>
                            <div className={classes.navLine}></div>
                        </div>
                    </div>
                </div>
            }
            {
                activeMenu &&
                <div className={classes.navMenu}>
                    <div className={classes.leftImage}>
                        <image src={Image3} alt="black woman in crochet attire"/>
                    </div>
                    <div className={classes.rightMenu}>

                    </div>
                </div>
            }
        </>
        // <>
        //     {activeMenu &&
        //         <div className={classes.navbar} ref={navbar}>
        //             <div className={classes.navLinks} ref={navbarLinks}>
        //                 <div>HOME</div>
        //                 <div>SHOWCASE</div>
        //                 <div>SHOP</div>
        //                 <div>ABOUT</div>
        //                 <div>INQUIRE</div>
        //             </div>
        //         </div>
        //     }
        //     {!activeMenu &&
        //         <div>

        //         </div>
        //     }
        // </>
    )
}

export default Navbar