import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: theme.colors.primary,
    },
    titleContainer: {
        fontFamily: theme.fonts.primary,
        textAlign: "center",
        padding: "0px 20px 0px 20px"
    },
    '@keyframes leftDotPush': {
        '0%': { left: 0 },
        '50%': { left: 100 },
        '100%': { left: 0 }
    },
    '@keyframes rightDotPush': {
        '0%': { right: 0 },
        '50%': { right: 100 },
        '100%': { right: 0 }
    },
    titleAcronym: {
        fontSize: "12rem",
        letterSpacing: 44,
        marginTop: 0,
        marginBottom: 0,
        '& span:nth-child(1)': {
            opacity: 0
        },
        '& span:nth-child(2)': {
            position: 'relative',
            animation: '$leftDotPush 1s ease-in'
        },
        '& span:nth-child(3)': {
            opacity: 0
        },
        '& span:nth-child(4)': {
            position: 'relative',
            animation: '$rightDotPush 1s ease-in'
        },
        '& span:nth-child(5)': {
            opacity: 0
        }
    },
    titleName: {
        opacity: 0,
        fontSize: "4rem",
        letterSpacing: 24,
        marginTop: 0,
        marginBottom: 0
    }
});

export default useStyles;