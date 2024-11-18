import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#EBCCAB",
        display: "grid",
        placeItems: "center",
        overflow: "hidden"
    },
    logo: {
        position: 'relative',
        zIndex: 2,
        bottom: "45px",
        maxWidth: "100%",
        maxHeight: "100%",
        width: "auto",
        height: "auto"
    },
    comingSoon: {
        position: 'absolute',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        zIndex: 1,
        fontSize: "200px",
        fontFamily: theme.fonts.primary,
        fontWeight: 600,
        letterSpacing: 20,
        filter: "drop-shadow(4px 4px 6px rgb(25,25,25))",
        '& p:nth-child(1)': {
            marginBottom: "0px"
        },
        '& p:nth-child(2)': {
            marginTop: "250px",
        }
    }
})

export default useStyles;