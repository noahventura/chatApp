import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import {auth} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";


const NavBar = () => {
  const [user] = useAuthState(auth);

// Function to handle Google sign-in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
  };

  // Function to handle sign-out
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>Live Chat</h1>
      {user ? (
                // Render sign-out button if user is signed in
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
                // Render sign-in button if user is not signed in
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
