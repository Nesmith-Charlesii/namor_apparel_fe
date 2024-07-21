import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        height: "100vh",
        backgroundColor: theme.colors.primary,
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        '& h1': {
            fontFamily: theme.fonts.primary,
            letterSpacing: 2,
            margin: 0,
            
        }
    }
});

export default useStyles;