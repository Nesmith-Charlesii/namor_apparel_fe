import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";
import asset from '../../assets/image/asset.jpeg';

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
    backgroundImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    pageContent: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 40px"
    },
    mainText: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    signUp: {
        position: "absolute",
        left: 0,
        fontSize: "20px",
        fontFamily: "Cormorant Garamond",
        top: 20,
        border: "1px solid black",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        paddingRight: "24px",
        borderRadius: "0px 10px 10px 0px",
        backgroundColor: "rgb(50, 50, 50)",
        color: "#fffeff",
        letterSpacing: "4px",
        fontWeight: 700
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
        fontFamily: theme.fonts.primary,
        color: "rgb(87, 87, 87)"
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