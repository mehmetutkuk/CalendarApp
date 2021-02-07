import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink} from 'react-router-dom';
import Theme from '../../components/Theme/Theme';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EditIcon from '@material-ui/icons/Edit';
import TableChartIcon from '@material-ui/icons/TableChart';
import { PowerSettingsNew } from '@material-ui/icons';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  subListItem: {
    paddingLeft: theme.spacing(2)
  }
}));
const DrawerRouteButtons = () => {
    const classes = useStyles();

    return(
      <Theme>
        <List>
              <ListItem button key={"Main"} component={RouterLink} to={'/'}>
                <ListItemIcon><DashboardIcon color="secondary"/></ListItemIcon>
                <Typography  color="secondary" component="p">
                  Main
                </Typography>
              </ListItem>
              <ListItem button component={RouterLink} to={'/logout'}>
                  <ListItemIcon><PowerSettingsNew color="secondary"/></ListItemIcon>
                  <Typography  color="secondary" component="p">
                  Logout
                  </Typography>
              </ListItem>
        </List>
      </Theme>
    );
}
export default DrawerRouteButtons;