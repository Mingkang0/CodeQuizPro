import { IonCard, IonCardContent, IonContent, IonGrid, IonInput, IonImg, IonPage, IonTitle, IonLabel, IonCardTitle, IonButton, IonRouterLink, IonText } from '@ionic/react';
import logo from '../assests/CodeQuiz_Pro-removebg-preview.png'
import './login.css'
const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="main">
        <IonGrid>
          <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />
          <IonTitle className='header ion-text-center'>Welcome to <strong>CodeQuizPro</strong></IonTitle>
          <div className='logo'>

            <IonImg src={logo} style={{ width: '65%' }} />
          </div>
          <IonCard className='card ion-margin'>
            <IonCardContent>
              <IonCardTitle className='title ion-text-center'>Sign In</IonCardTitle>
              <IonInput label="Email" labelPlacement="floating" fill="outline" type="email" placeholder='Enter email'></IonInput>
              <IonInput label="Password" labelPlacement="floating" fill="outline" type="password" placeholder='Enter password'></IonInput>
              <IonRouterLink>
                Forgot Password?
              </IonRouterLink>
              <IonButton className="btn" expand="block">Login</IonButton>
            </IonCardContent>
          </IonCard>
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