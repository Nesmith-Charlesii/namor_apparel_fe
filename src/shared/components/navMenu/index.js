import React from 'react';
import useStyles from './pageStyles';
import Image3 from "../../../assets/image/asset4.jpg";

const NavMenu = () => {
    const classes = useStyles()

    return (
        <div className={classes.navMenu}>
            <div className={classes.leftImage}>
                <image src={Image3} alt="black woman in crochet attire" />
            </div>
            <div className={classes.rightMenu}>
                <div className={classes.navLinks} >
                    <div>HOME</div>
                    <div>SHOWCASE</div>
                    <div>SHOP</div>
                    <div>ABOUT</div>
                    <div>INQUIRE</div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu