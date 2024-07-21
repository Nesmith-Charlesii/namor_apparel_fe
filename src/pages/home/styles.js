import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.colors.primary,
    },
    title: {
        '& h1': {
            fontFamily: theme.fonts.primary,
            letterSpacing: 2,
            margin: 0,
            
        }
    }
});

export default useStyles;