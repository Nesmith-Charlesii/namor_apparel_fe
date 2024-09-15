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
    '@keyframes bounce': {
        
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
            
        },
        '& span:nth-child(3)': {
            opacity: 0
        },
        '& span:nth-child(4)': {
            position: 'relative',
            
        },
        '& span:nth-child(5)': {
            opacity: 0
        }
    },
    titleName: {
        fontSize: "4rem",
        letterSpacing: 24,
        marginTop: 0,
        marginBottom: 0
    }
});

export default useStyles;