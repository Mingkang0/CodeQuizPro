import { IonCard, IonCardContent, IonContent, IonGrid, IonInput, IonImg, IonPage, IonTitle, IonButtons, IonCardTitle, IonButton, IonRouterLink, IonText } from '@ionic/react';
import logo from '../../assests/CodeQuiz_Pro-removebg-preview.png'
import '../../pages/css/Login.css';
import { useState } from 'react';
import { getUserInfo, loginAnonymously } from './auth';
import "@agconnect/storage";
import { configInstance } from './config'
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();
  const [phone, setPhone] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [account, setAccount] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  const signInAnonymously = async (e: React.FormEvent) => {
    e.preventDefault();
    configInstance();

    loginAnonymously()
      .then((res) => {
        console.log('login successfully!');
      }).catch((err) => {
        alert(err.message);
      });
    console.log("User: ", getUserInfo())
    history.push('/home');
  };

  const onChangePhone = (e: any) => {
    setPhone(e.detail.value);
  }

  const onChangeAccount = (e: any) => {
    setEmail(e.detail.value);
  }

  const onChangePassword = (e: any) => {
    setPassword(e.detail.value);
  }

  const onChangeEmail = (e: any) => {
    setEmail(e.detail.value);
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
          <form action='post' onSubmit={signInAnonymously}>
            <IonCard className='card ion-margin ion-padding-vertical'>
              <IonCardContent>
                <IonCardTitle className='title ion-text-center'>Login Anonymously</IonCardTitle>
                <IonInput onIonChange={onChangePhone} value={phone} name='phone' label="Phone" labelPlacement="floating" fill="outline" type="number" placeholder='Enter phone'></IonInput>
                <IonInput onIonChange={onChangeAccount} value={account} name='account' label="Account" labelPlacement="floating" fill="outline" type="text" placeholder='Enter account'></IonInput>
                <IonInput onIonChange={onChangeEmail} value={email} name='email' label="Email" labelPlacement="floating" fill="outline" type="text" placeholder='Enter email'></IonInput>
                <IonInput onIonChange={onChangePassword} value={password} name='password' label="Password" labelPlacement="floating" fill="outline" type="password" placeholder='Enter password'></IonInput>
                <IonRouterLink>
                  Forgot Password?
                </IonRouterLink>
                <IonButton className="btn" expand="block" type="submit">Login</IonButton>

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
