import { IonCard, IonCardContent, IonContent, IonGrid, IonInput, IonImg, IonPage, IonTitle, IonLabel, IonCardTitle, IonButton, IonRouterLink, IonText } from '@ionic/react';
import logo from '../assests/CodeQuiz_Pro-removebg-preview.png'
import './register.css'
const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="main">
        <IonGrid>
          <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />
          <div className='logo'>
            <IonImg src={logo} style={{ width: '65%' }} />
          </div>
          <IonCard className='card ion-margin'>
            <IonCardContent>
              <IonCardTitle className='title ion-text-center'>Sign Up</IonCardTitle>
              <IonInput label="Username" labelPlacement="floating" fill="outline" type="text" placeholder='Enter username'></IonInput>
              <IonInput label="Email" labelPlacement="floating" fill="outline" type="email" placeholder='Enter email'></IonInput>
              <IonInput label="Password" labelPlacement="floating" fill="outline" type="password" placeholder='Enter password'></IonInput>
              <IonInput label="Confirm Password" labelPlacement="floating" fill="outline" type="password" placeholder='Confirm password'></IonInput>
              <IonButton className="btn" expand="block">Register Account</IonButton>
            </IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Register;