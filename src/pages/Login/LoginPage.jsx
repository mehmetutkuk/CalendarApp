import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../reducers/userSlice';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Redirect } from 'react-router-dom';
import { setLoading } from '../../reducers/layoutSlice';


const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameValidation, setUsernameValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [credentialsValidation, setCredentialsValidation] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const classes = useStyles();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setPasswordValidation('Şifreniz boş olamaz!');
      return;
    }
    if (!username) {
      setUsernameValidation('Kullanıcı adınız boş olamaz!');
      return;
    }
    dispatch(setLoading(true));
    dispatch(loginAsync({username: username, password: password }));
    dispatch(setLoading(false));
  };
  const onUsernameChange = (e) => {
    const { value } = e.target;
    resetValidations();
    setUsername(value);
  }
  const setRememberMeCheckbox = (e) => {
    const { checked } = e.target;
    setRememberMe(checked);
  }
  const resetValidations = () => {
    setUsernameValidation('');
    setPasswordValidation('');
    setCredentialsValidation('');
  }
  const onClickShowPassword = () => {
    setShowPassword(showPassword);
  }
  const onPasswordChange = (e) => {
    const { value } = e.target;
    resetValidations();
    setPassword(value);
  }

  if (user.isLoggedIn) return <Redirect to="/" />;
  var usernameTextfield = {};
  var passwordTextfield = {};

  if (usernameValidation) {
    usernameTextfield["error"] = true;
    usernameTextfield["helperText"] = usernameValidation;
  }

  if (passwordValidation) {
    passwordTextfield["error"] = true;
    passwordTextfield["helperText"] = passwordValidation;
  }
  if (credentialsValidation) {
    passwordTextfield["error"] = true;
    passwordTextfield["helperText"] = credentialsValidation;
  }

  return (
    <div>
      <main className={classes.main}>
        <CssBaseline />
        <Paper elevation={5} className={classes.paper}>
          {/* <img className={classes.anchorImage} src={process.env.PUBLIC_URL + '/img/anchor-png-transparent-10.png'} alt={""} /> */}
          <Typography className={classes.formHeaderText} component="h1" variant="h5">
            GİRİŞ
                    </Typography>
          <form onSubmit={onSubmit} className={classes.form}>
            <FormControl required fullWidth>
              <label className={classes.label}>Kullanıcı Adı</label>
              <TextField helperText=" " {...usernameTextfield} value={username} variant="outlined" label="Kullanıcı Adınız" onChange={(e) => onUsernameChange(e)} id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl required fullWidth>
              <label className={classes.label}>Şifre</label>
              <TextField helperText=" " {...passwordTextfield} InputProps={{
                endAdornment: (<InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>)
              }}
                value={password}
                variant="outlined"
                label="Şifreniz"
                onChange={(e) => onPasswordChange(e)}
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password" />
            </FormControl>
            <LinearProgress variant="determinate" value={50} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              GİRİŞ YAP
                    </Button>
          </form>
        </Paper>
      </main>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(75),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(24),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(11)} ${theme.spacing(17)} ${theme.spacing(0)}`,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(),
    paddingBottom: theme.spacing(15),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  submit: {
    marginTop: theme.spacing(2),
    backgroundColor: '#03254C',
  },
  link: {
    marginTop: theme.spacing(2),
  },
  label: {
    fontSize: theme.spacing(2),
    color: '#193365',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    color: '#1167B1',
  },
  checkboxLabel: {
    color: '#193365',
    fontWeight: "bolder",
    fontSize: theme.spacing(2),
  },
  formHeaderText: {
    color: '#193365',
    fontWeight: "200",
    fontSize: theme.spacing(10),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  forgotPassword: {
    color: '#193365',
    fontWeight: "bolder",
    fontSize: theme.spacing(2),
    paddingTop: '10px',
  },
  formControl: {
    paddingRight: theme.spacing(17),
    paddingLeft: theme.spacing(17),
  },
  anchorImage: {
    position: 'absolute',
    marginTop: theme.spacing(-40)
  }
}));


export default LoginPage;