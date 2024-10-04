import { createUseStyles } from "react-jss";
//import theme from "../../styles/theme";

const useStyles = createUseStyles({
    navbar: {
        height: "100px",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        zIndex: 2,
        width: "100%",
        backgroundColor: "transparent"
    },
    navLinks: {
        //color: "rgb(60, 60, 60)",
        width: "100%",
        color: "rgb(240, 240, 240)",
        fontFamily: "Courier New",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        listStyleType: "none",
        fontSize: "1rem",
        fontWeight: 600
,       padding: "0px 80px",
        letterSpacing: "2px"
    }
})

export default useStyles