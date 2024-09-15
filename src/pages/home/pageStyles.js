import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
    },
    titleContainer: {
        fontFamily: theme.fonts.primary,
        color: "rgb(60, 60, 60)",
        textAlign: "center",
        padding: "0px 20px 0px 0px",
    },
    '@keyframes blur': {
        "0%": {
            opacity: 0,
            transform: "scale(.5)",
            filter: "blur(5px) drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
            right: 100
        },
        "100%": {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0px) drop-shadow(5px 10px 8px rgba(0, 0, 0, 0.4))",
            right: 0
        }
    },
    '@keyframes scaleDown': {
        // '0%': { transform: "scale(14) rotateY(0deg)"},
        // '100%': { transform: "scale(1) rotateY(360deg)"}
        '0%': {opacity: 0, transform: "scale(.5)", filter: "blur(5px)"},
        '100%': {opacity: 1, transform: "scale(1)", filter: "blur(0px)"}
    },
    '@keyframes blurTitle': {
        "0%": {
            opacity: 0,
            filter: "blur(5px)",
            top: 3
        },
        "100%": {
            opacity: 1,
            filter: "blur(0px)",
            top: 0
        }
    },
    '@keyframes spin': {
        '0%': { transform: "rotateY(0deg)" },
        '100%': { transform: "rotateY(360deg)" },
    },
    titleAcronym: {
        fontSize: "12rem",
        letterSpacing: 44,
        marginTop: 0,
        marginBottom: 0,
        '& span:nth-child(1)': {
            animation: "$scaleDown 4s ease-in-out forwards",
            display: 'inline-block'
        },
        '& span:nth-child(2)': {
            position: 'relative',
            animation: "$blur 2.5s ease-out forwards",
        },
        '& span:nth-child(3)': {
            animation: "$scaleDown 4.5s ease-in-out forwards",
            display: 'inline-block'
        },
        '& span:nth-child(4)': {
            position: 'relative',
            animation: "$blur 3s ease-out forwards",
        },
        '& span:nth-child(5)': {
            animation: "$scaleDown 5s ease-in-out forwards",
            display: 'inline-block'
        }
    },
    titleName: {
        opacity: 0,
        position: "relative",
        fontWeight: 600,
        fontSize: "4rem",
        letterSpacing: 24,
        marginTop: 0,
        marginBottom: 0,
        animation: '$blurTitle 800ms ease-in-out 3s forwards',
    }
});

export default useStyles;