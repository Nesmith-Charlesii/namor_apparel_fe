import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        backgroundColor: "#fffeff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        margin: 0
    },
    pageContent: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    comingSoon: {
        opacity: 0,
        color: "#a97c4b",
        fontSize: "11rem",
        fontFamily: theme.fonts.primary,
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "41px",
        fontFamily: theme.fonts.primary,
        color: "rgb(93, 93, 93)"
    },
    titleAcronym: {
        display: "flex",
        fontSize: "11rem",
        letterSpacing: 44,
        marginTop: 20,
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
        fontSize: "2.8rem",
        letterSpacing: 24,
        marginTop: 0,
        marginBottom: 60,
    },
    socials: {
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    insta: {
        position: "relative",
        height: "68px",
        bottom: "0px",
        transition: "bottom 0.4s ease",
        '&:hover': {
            bottom: "10px"
        }
    },
    tiktok: {
        position: "relative",
        height: "90px",
        bottom: "0px",
        transition: "bottom 0.4s ease",
        '&:hover': {
            bottom: "10px"
        }
    }
})

export default useStyles;