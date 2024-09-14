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
    title: {
        fontFamily: theme.fonts.primary,
        textAlign: "center",
        padding: "0px 20px 0px 20px",
        '& p:nth-child(1)': {
            fontSize: "12rem",
            letterSpacing: 44,
            marginTop: 0,
            marginBottom: 0
        },
        '& p:nth-child(2)': {
            fontSize: "4rem",
            letterSpacing: 24,
            marginTop: 0,
            marginBottom: 0
        }
    }
});

export default useStyles;