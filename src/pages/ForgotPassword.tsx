import { IonToast, IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonGrid, IonImg, IonInput, IonPage, IonRouterLink, IonText, IonTitle } from '@ionic/react';
import { auth } from '../firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import logo from '../assests/CodeQuiz_Pro-removebg-preview.png';
import './css/Login.css';
import { useHistory } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);
    const [error, setError] = useState<any>(null);
    const [success, setSuccess] = useState<any>(null);
    const history = useHistory();

    const handleResetPassword = async (e: any) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email)
                .then(() => {
                    setSuccess("Reset email sent. Please check your email");
                });
            setResetSent(true);
        } catch (error: any) {
            setError(error.message);
            console.error(error);
        }
    };

    const onChangeEmail = (e: any) => {
        setEmail(e.detail.value);
    }

    const backToLogin = () => {
        history.push('/login');
        window.location.reload();
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
                    <form action='post' onSubmit={handleResetPassword}>
                        <IonCard className='card ion-margin ion-padding-vertical'>
                            <IonCardContent>
                                <IonCardTitle className='title ion-text-center'>Forgot Password</IonCardTitle>
                                <IonInput onIonChange={onChangeEmail} value={email} name='email' label="Email" labelPlacement="floating" fill="outline" type="email" placeholder='Enter email'></IonInput>
                                <IonButton className="btn ion-margin-bottom" expand="block" type="submit">Forgot Password</IonButton>
                                <IonButton onClick={backToLogin} className='btnHuawei' expand="block" type="submit">Back to Sign In</IonButton>
                            </IonCardContent>
                        </IonCard>
                    </form>
                </IonGrid>
                <IonGrid>
                    <IonText className='text ion-margin'>
                        Do you have an account? <IonRouterLink href='/register'>Sign Up</IonRouterLink>
                    </IonText>
                </IonGrid>
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
            </IonContent>
        </IonPage>
    );
};

export default ResetPassword;