import { IonCard, IonCardContent, IonContent, IonGrid, IonInput, IonImg, IonPage, IonTitle, IonLabel, IonCardTitle, IonButton, IonRouterLink, IonText } from '@ionic/react';
import logo from '../assests/CodeQuiz_Pro-removebg-preview.png'
import './css/Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase.config';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  const onChangeEmail = (e: any) => {
    setEmail(e.detail.value);
  }

  const onChangePassword = (e: any) => {
    setPassword(e.detail.value);
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // console.log(user)
      history.push('/home');
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  console.log(auth?.currentUser?.uid)
  return (
    <IonPage>
      <IonContent color="main">
        <IonGrid>
          <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />
          <IonTitle className='header ion-text-center'>Welcome to <strong>CodeQuizPro</strong></IonTitle>
          <div className='logo'>
            <IonImg src={logo} style={{ width: '65%' }} />
          </div>
          <form action='post' onSubmit={handleLogin}>
            <IonCard className='card ion-margin'>
              <IonCardContent>
                <IonCardTitle className='title ion-text-center'>Sign In</IonCardTitle>
                <IonInput onIonChange={onChangeEmail} value={email} name='email' label="Email" labelPlacement="floating" fill="outline" type="email" placeholder='Enter email'></IonInput>
                <IonInput onIonChange={onChangePassword} value={password} name='password' label="Password" labelPlacement="floating" fill="outline" type="password" placeholder='Enter password'></IonInput>
                <IonRouterLink>
                  Forgot Password?
                </IonRouterLink>
                <IonButton className="btn" expand="block" type="submit">Login</IonButton>
              </IonCardContent>
            </IonCard>
          </form>
        </IonGrid>
        <IonGrid>
          <IonText className='text ion-margin'>
            Do you have an account? <IonRouterLink href='/register'>Sign Up</IonRouterLink>
          </IonText>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Login;
