import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import { authenticate } from "./store/session";
import {useDispatch} from 'react-redux';
import MainContainer from "./components/MainContainer";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());   //Need this await or page briefly starts unauthenticated when logged in
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <MainContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
