import { createUseStyles } from "react-jss";
import theme from "../../shared/styles/theme";

const useStyles = createUseStyles({
    container: {
        height: "100vh",
        width: "100vw",
        //fontFamily: theme.fonts.primary,
        backgroundColor: theme.colors.primary,
    }
});

export default useStyles;