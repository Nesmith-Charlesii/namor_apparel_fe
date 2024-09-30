import { createUseStyles } from "react-jss";
//import theme from "../../styles/theme";

const useStyles = createUseStyles({
    navbar: {
        height: "120px",
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "transparent",
        padding: "40px 0px 0px 0px"
    },
    navLinks: {
        //color: "rgb(60, 60, 60)",
        height: "100%",
        color: "rgb(240, 240, 240)",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "end",
        marginRight: "85px",
        listStyleType: "none",
        fontSize: "16px",
    }
})

export default useStyles