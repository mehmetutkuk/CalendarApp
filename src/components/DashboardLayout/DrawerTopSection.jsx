import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Theme from '../../components/Theme/Theme';

const useStyles = makeStyles((theme) => ({
    drawerTopSection: {
        height: '120px'
    },
    drawerHeaderText: {
        float: 'left',
        fontWeight: 'bolder',
        fontSize: theme.spacing(4)
    },
    drawerHeaderSubtext: {
        float: 'left',
        fontWeight: 'bolder',
        fontSize: theme.spacing(2),
        marginTop: '-20px',
    },
  anchorImage: {
    height: '250px',
    position: 'absolute',
    marginLeft: '90px',
    marginTop: '-80px'
    }
}));

const DrawerTopSection = () =>  {
    const classes = useStyles();
    return(
        <Theme>
            <List >
                <ListItem className={classes.drawerTopSection}>
                </ListItem>
                <ListItem>
                    <Typography color="secondary" className={classes.drawerHeaderText} component="h4">
                    Calendar
                    </Typography>
                </ListItem>
            </List>
    </Theme>
    );
}
export default DrawerTopSection;