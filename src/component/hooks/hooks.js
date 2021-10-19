import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from "../Firebase/FIrebase.initialize";

initialize();

const useFirebase = () => {
  const auth = getAuth();
  const Googleprovider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isloding, setisLoding] = useState(true);
  const googleLogin = () => {
    setisLoding(true);
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        // ...
      })
      .finally(() => setisLoding(false));
  };
  const userName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const registation = (email, password, name) => {
    setisLoding(true);
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        result.user.displayName = name;
        userName(name);
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.messsage);
      });
  };

  const handleLogin = (email, password) => {
    setisLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        setUser(result.user);
        // ...
      })
      .finally(() => setisLoding(false));
  };
  const logOut = () => {
    setisLoding(true);
    signOut(auth).then(() => {
      setUser({});
    });
    setisLoding(false);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setisLoding(false);
    });
  }, []);

  return {
    user,
    isloding,
    logOut,
    googleLogin,
    registation,
    handleLogin,
  };
};
export default useFirebase;
