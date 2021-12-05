import classes from "./Login.module.css";
import React from "react";
import { Button, darken, Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import GoogleButton from "react-google-button";
import { getDatabase,ref, push, set } from "firebase/database";


import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOciwim1GvUkeL031SJg9KU-EjwpYUckY",
  authDomain: "todo-8fb07.firebaseapp.com",
  databaseURL: "https://todo-8fb07-default-rtdb.firebaseio.com",
  projectId: "todo-8fb07",
  storageBucket: "todo-8fb07.appspot.com",
  messagingSenderId: "999828364090",
  appId: "1:999828364090:web:ee02352e8646e4856f0e03",
  measurementId: "G-RZGCXPM9NV",
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();

  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};



const logoutHandler = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};


onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    // ...
  } else {
    // User is signed out

    // ...
  }
});



// // Set the configuration for your app
// // TODO: Replace with your project's config object
// const firebaseConfig = {
//   apiKey: "AIzaSyBOciwim1GvUkeL031SJg9KU-EjwpYUckY",
//   authDomain: "todo-8fb07.firebaseapp.com",
//   // For databases not in the us-central1 location, databaseURL will be of the
//   // form https://[databaseName].[region].firebasedatabase.app.
//   // For example, https://your-database-123.europe-west1.firebasedatabase.app
//   databaseURL: "https://todo-8fb07-default-rtdb.firebaseio.com",
//   storageBucket: "todo-8fb07.appspot.com"
// };


// Get a reference to the database service
// const database = getDatabase(app);

// Create a new post reference with an auto-generated id
// const postListRef = ref(database, 'posts');
// const newPostRef = push(postListRef);
// set(newPostRef, {
  
//     // ...
// });

const useStyle = makeStyles({
    drawer: {
    
      backgroundColor: "#3A3F49",
      height: 60,
    },
    drawerPaper: {
      width: "150px",
    },
    button:{
        backgroundColor:"#3A3F49",
        color:'#FFF'
        
    }
  });

const login = () => {
  const style = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        {/* <Drawer
        //   style={{background:'#3A3F49'}}
        variant="permanent"
        anchor="left"
        // class={{paper:style.drawerPaper}}
        className={style.drawer}
        >
          <Button  style={{backgroundColor:'#FFF'}} >login</Button>
        </Drawer> */}
        <GoogleButton
          onClick={signInWithGoogle}
          style={{ width: "100%", outline: "none" }}
        ></GoogleButton>

        <Button className={style.button} onClick={logoutHandler} >
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

export default login;
