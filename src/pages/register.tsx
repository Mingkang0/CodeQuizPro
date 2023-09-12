import { IonCard, IonCardContent, IonContent, IonGrid, IonInput, IonImg, IonPage, IonCardTitle, IonButton, IonRouterLink, IonText } from '@ionic/react';
import logo from '../assests/CodeQuiz_Pro-removebg-preview.png'
import './css/Register.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

const Register: React.FC = () => {
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = (e: any) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, register.email, register.password);
      console.log("The account has been successfully created!");
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
    }
  };

  return (
    <IonPage>
      <IonContent color="main">
        <IonGrid>
          <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />
          <div className='logo'>
            <IonImg src={logo} style={{ width: '65%' }} />
          </div>
          <form onSubmit={handleSubmit}>
            <IonCard className='card ion-margin'>
              <IonCardContent>
                <IonCardTitle className='title ion-text-center'>Sign Up</IonCardTitle>
                <IonInput onIonChange={onChange} value={register.username} name='username' label="Username" labelPlacement="floating" fill="outline" type="text" placeholder='Enter username'></IonInput>
                <IonInput onIonChange={onChange} value={register.email} name='email' label="Email" labelPlacement="floating" fill="outline" type="email" placeholder='Enter email'></IonInput>
                <IonInput onIonChange={onChange} value={register.password} name='password' label="Password" labelPlacement="floating" fill="outline" type="password" placeholder='Enter password'></IonInput>
                <IonInput onIonChange={onChange} value={register.confirmPassword} name='confirmPassword' label="Confirm Password" labelPlacement="floating" fill="outline" type="password" placeholder='Confirm password'></IonInput>
                <IonButton className="btn" expand="block" type="submit">Register Account</IonButton>
              </IonCardContent>
            </IonCard>
          </form>
        </IonGrid>
        <IonGrid>
          <IonText className='text ion-margin'>
            Already have an account? <IonRouterLink href='/login'>Sign In</IonRouterLink>
          </IonText>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Register;
