import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        margin: 0
    },
    pageContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    comingSoon: {
        opacity: 1,
        color: "#E0D2BB",
        fontSize: "100px",
        fontFamily: theme.fonts.primary,
        fontWeight: 600
    },
    titleContainer: {
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "41px",
        fontFamily: theme.fonts.primary,
        color: "rgb(85, 85, 85)"
    },
    titleAcronym: {
        display: "flex",
        fontSize: "9rem",
        letterSpacing: 44,
        marginTop: 0,
        marginBottom: 0,
        '& div:nth-child(1)': {
            opacity: 1
        },
        '& div:nth-child(2)': {
            opacity: 1
        },
        '& div:nth-child(3)': {
            opacity: 1
        },
        '& div:nth-child(4)': {
            opacity: 1
        },
        '& div:nth-child(5)': {
            opacity: 1
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
})

export default useStyles;