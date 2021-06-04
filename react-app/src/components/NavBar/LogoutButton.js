import React from "react";
import {useDispatch} from 'react-redux';
import { logout } from "../../store/session";

// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

// const useStyles = makeStyles({
//   root:{
//     backgroundColor: red[800],
//     color: "white",
//     fontSize: "16px",
//     width: "100px",
//     padding: "10px",
//     borderRadius: "10px",
//     '&:hover': {
//       backgroundColor: red[600],
//     },
//   }
// })

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    dispatch(logout());
  };

  return <button className='logout-button' onClick={onLogout}>Logout</button>;
  // return <Button classes={{root: useStyles().root}} variant='contained' onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
