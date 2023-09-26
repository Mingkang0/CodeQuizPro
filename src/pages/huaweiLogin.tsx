import { IonCard, IonCardContent, IonContent, IonGrid, IonInput, IonImg, IonPage, IonTitle, IonButtons, IonCardTitle, IonButton, IonRouterLink, IonText } from '@ionic/react';
import logo from '../assests/CodeQuiz_Pro-removebg-preview.png'
import './css/Login.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");


  const signInWithHuawei = (e:any) => {
    e.preventDefault();
    console.log("Login with Huawei")
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.detail.value);
  }

  const onChangePassword = (e: any) => {
    setPassword(e.detail.value);
  }

  return (
    <IonPage>
      <IonContent color="main" className='ion-padding-top'>
        <IonGrid>
          <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />
          <IonTitle className='header ion-text-center'><h2>Welcome to <strong>CodeQuiz Pro</strong></h2></IonTitle>
          <div className='logo'>
            <IonImg src={logo} style={{ width: '65%' }} />
          </div>
          <form action='post' onSubmit={signInWithHuawei}>
            <IonCard className='card ion-margin ion-padding-vertical'>
              <IonCardContent>
                <IonCardTitle className='title ion-text-center'>Sign In with HUAWEI ID</IonCardTitle>
                <IonInput onIonChange={onChangeEmail} value={email} name='email' label="Email" labelPlacement="floating" fill="outline" type="email" placeholder='Enter email'></IonInput>
                <IonInput onIonChange={onChangePassword} value={password} name='password' label="Password" labelPlacement="floating" fill="outline" type="password" placeholder='Enter password'></IonInput>
                <IonRouterLink>
                  Forgot Password?
                </IonRouterLink>
                <IonButton  className="btn" expand="block" type="submit">Login</IonButton>
                <IonRouterLink routerLink='/login'>
                    <IonButton className="btnHuawei" expand="block">Back</IonButton>
                </IonRouterLink>
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
