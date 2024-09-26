import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: theme.colors.primary,
        //backgroundColor: "rgb(60, 60, 60)",
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: theme.fonts.primary,
        color: "rgb(60, 60, 60)",
        //color: theme.colors.primary,
    },
    titleAcronym: {
        display: "flex",
        fontSize: "12rem",
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
        fontWeight: 600,
        fontSize: "4rem",
        letterSpacing: 24,
        marginTop: 0,
        marginBottom: 0,
    }
});

export default useStyles;