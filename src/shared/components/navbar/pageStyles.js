import { createUseStyles } from "react-jss";
//import theme from "../../styles/theme";

const useStyles = createUseStyles({
    navBar: {
        position: "fixed",
        height: "80px",
        width: "100%",
        display: "flex",
        alignItems: 'center',
        backgroundColor: "transparent",
        zIndex: 2,
    },
    navContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "0px 80px"
    },
    navIcon: {
        height: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    navLogo: {
        color: "rgb(240, 240, 240)"
    },
    navLine: {
        height: ".5px",
        width: "50px",
        backgroundColor: "rgb(240, 240, 240)"
    },
//     navbar: {
//         height: "100px",
//         position: "fixed",
//         display: "flex",
//         alignItems: "center",
//         zIndex: 2,
//         width: "100%",
//         backgroundColor: "transparent"
//     },
//     navLinks: {
//         //color: "rgb(60, 60, 60)",
//         width: "100%",
//         color: "rgb(240, 240, 240)",
//         fontFamily: "Courier New",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         listStyleType: "none",
//         fontSize: "1rem",
//         fontWeight: 600
// ,       padding: "0px 80px",
//         letterSpacing: "2px"
//     }
})

export default useStyles