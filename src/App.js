
import React, {useState, useEffect} from "react";
import fire from './firebase';
import './App.css';
import './estilo.footer.css';
import './estilo.header.css';
import './index.css';





import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Page from './components/Home/Home.jsx';
import { isBreakOrContinueStatement } from 'typescript';


function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');

  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch( err =>{

        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;

        }
    });
  };

  const handleSingup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch( err =>{

      switch(err.code){
        case "auth/-email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
  });
};

const handleLogout = () => {
   fire.auth().signOut();
};

const authListener = () => {
  fire.onAuthStatementChanged(user => {
    if(user){
      clearInputs();
      setUser(user);
    } else {
      setUser("")
    }
  });
};

 useEffect(() => {
    authListener();
 }, [])

  return (
    <div>
      <Header/>
      <Page/>
      <Footer/>
      </div>
  );
}

export default App;
