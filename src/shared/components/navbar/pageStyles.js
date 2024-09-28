import { createUseStyles } from "react-jss";
import theme from "../../styles/theme";

const useStyles = createUseStyles({
    navbar: {
        position: "fixed",
        width: "100%",
        backgroundColor: "transparent",
        padding: "40px 0px 0px 0px"
    },
    navLinks: {
        color: "rgb(60, 60, 60)",
        fontFamily: theme.fonts.primary,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        listStyleType: "none",
        fontSize: "1.1rem",
        fontWeight: 600,
        '& div:nth-child(3)': {
            fontSize: "1.7rem",
            color: "rgb(60, 60, 60)",
            fontWeight: 800
        }
    }
})

export default useStyles