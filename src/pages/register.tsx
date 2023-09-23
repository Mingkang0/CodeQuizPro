import { IonCard, IonCardContent, IonToast, IonContent, IonGrid, IonInput, IonImg, IonPage, IonCardTitle, IonButton, IonRouterLink, IonText } from '@ionic/react';
import logo from '../assests/CodeQuiz_Pro-removebg-preview.png'
import './css/Register.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, cloudDB } from '../firebase.config';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import DefaultAvatar from '../assests/Avatar/Avatar_1.png';

const Register: React.FC = () => {
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<any>(null);
  const [success, setSuccess] = useState<any>();

  const onChange = (e: any) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }


  // Function to add a new user document 
  const addUserDocument = async (uid: string, username: string, avatar: string) => {
    try {
      const userRef = doc(cloudDB, 'User', uid);
      const payload = { username, avatar };
      await setDoc(userRef, payload);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const initializeLearningProgress = async (uid: string) => {
    try {
      const docRef = doc(cloudDB, 'Learning_Progress', uid);
      await setDoc(docRef, {});
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (register.password !== register.confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
      await createUserWithEmailAndPassword(auth, register.email, register.password);
      const user = auth.currentUser;
      if (user) {
        await addUserDocument(user.uid, register.username, DefaultAvatar);
        await initializeLearningProgress(user.uid);
      }
      setSuccess("The account has been successfully created!");
    } catch (error: any) {
      setError(error.message);
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
      <IonToast
        isOpen={!!error}
        message={error || ''}
        duration={3000}
        onDidDismiss={() => setError(null)}
        color="danger"
      />
      <IonToast
        isOpen={!!success}
        message={success || ''}
        duration={3000}
        onDidDismiss={() => setSuccess(null)}
        color="success"
      />
    </IonPage>
  );
}

export default Register;
