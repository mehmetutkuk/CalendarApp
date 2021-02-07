import { CircularProgress, Grid,Backdrop, Modal, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        width: '100%',
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'transparent'
    },
    circularProgressGrid: {
        position: 'relative',
    },
    circularProgress: {
        marginLeft: '50%'
    }
}));
const ReduxManagedSpinner = () => {
    const classes = useStyles();
    const layoutStore = useSelector(state=>state.layout);
    return (
        <Backdrop className={classes.backdrop}
              open={layoutStore.loading}
            >
                  <Grid container
                  justify="center"
                  alignItems="stretch">
                      <Grid className={classes.circularProgressGrid} item xs={12}>
                        <CircularProgress className={classes.circularProgress}/>
                      </Grid>
                  </Grid>
            </Backdrop>
        
    )
}
export default ReduxManagedSpinner;