import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        backgroundColor: "#d8b796",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        margin: 0
    },
    pageContent: {
        maxWidth: "1290px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 40px"
    },
    pageContentTablet: {
        transform: "scale(.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 40px"
    },
    pageContentPhone: {
        transform: "scale(.55)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 40px"
    },
    mainText: {
        transform: "scale(.9)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    comingSoon: {
        opacity: 0,
        color: "#cb9f72",
        fontSize: "9rem",
        fontFamily: theme.fonts.primary,
    },
    titleContainer: {
        transform: "scale(1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: theme.fonts.primary,
        color: "rgb(70, 70, 70)",
        marginLeft: "24px"
    },
    titleAcronym: {
        display: "flex",
        fontSize: "10rem",
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
        bottom: "55px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    socialsTablet: {
        position: "relative",
        marginTop: "40px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    socialsPhone: {
        transform: "scale(1.3)",
        position: "relative",
        marginTop: "80px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
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
    instaTablet: {
        position: "relative",
        height: "90px",
        bottom: "0px",
        transition: "bottom 0.4s ease",
        '&:hover': {
            bottom: "10px"
        }
    },
    instaPhone: {
        position: "relative",
        height: "90px",
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
    },
    tiktokTablet: {
        position: "relative",
        height: "120px",
        bottom: "0px",
        transition: "bottom 0.4s ease",
        '&:hover': {
            bottom: "10px"
        }
    },
    tiktokPhone: {
        position: "relative",
        height: "120px",
        bottom: "0px",
        transition: "bottom 0.4s ease",
        '&:hover': {
            bottom: "10px"
        }
    },
    letterBoxing: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        zIndex: 2
    },
    topBorder: {
        backgroundColor: "rgb(20, 20, 20)",
        top: 0,
        height: "50vh",
        width: "100vw"
    },
    bottomBorder: {
        backgroundColor: "rgb(20, 20, 20)",
        bottom: 0,
        height: "50vh",
        width: "100vw"
    },
    border: {
        position: "absolute",
        height: "1px",
        width: "0vw",
        zIndex: 3,
        backgroundColor: "#cb9f72",
    }
})

export default useStyles;