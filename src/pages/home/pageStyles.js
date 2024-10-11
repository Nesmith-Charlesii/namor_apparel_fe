import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: theme.colors.primary,
        backgroundColor: "rgb(20, 20, 20)",
    },
    titleContainer: {
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "41px",
        fontFamily: theme.fonts.primary,
        //color: "rgb(60, 60, 60)",
        color: theme.colors.primary,
    },
    titleAcronym: {
        display: "flex",
        fontSize: "9rem",
        letterSpacing: 44,
        marginTop: 0,
        marginBottom: 0,
        '& div:nth-child(1)': {
            opacity: 0
        },
        '& div:nth-child(2)': {
            opacity: 0
        },
        '& div:nth-child(3)': {
            opacity: 0
        },
        '& div:nth-child(4)': {
            opacity: 0
        },
        '& div:nth-child(5)': {
            opacity: 0
        }
    },
    titleName: {
        display: "flex",
        flexDirection: "row",
        fontWeight: 600,
        fontSize: "2.5rem",
        letterSpacing: 24,
        marginTop: 0,
        marginBottom: 0,
    },
    video: {
        position: "absolute",
        zIndex: 0
    },
    backgroundOverlay: {
        position: "absolute",
        zIndex: 1,
        display: "flex",
        border: "1px solid rgba(255, 0, 0, .2)",
        height: "100%",
        width: "100%"
    },
    backgroundOverlay1: {
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(20, 20, 20)"
    },
    backgroundOverlay2: {
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(20, 20, 20)"
    }
});

export default useStyles;