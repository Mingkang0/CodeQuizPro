import { IonContent, IonNavLink, IonButtons, IonBackButton, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonAvatar, IonItem, IonText, IonLabel, IonButton, IonCardContent, IonCard } from '@ionic/react';
import './css/Profile.css'
import React from 'react';
import { pencilOutline } from 'ionicons/icons';

const Profile: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='warning'>
                    <IonButtons slot='start'>
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle className='ion-margin'><strong>Profile</strong></IonTitle>
                    <IonNavLink slot='end'>
                        <IonButton color='dark' fill='clear' routerLink='/editProfile'>
                            <IonIcon icon={pencilOutline}></IonIcon>
                        </IonButton>
                    </IonNavLink>
                </IonToolbar>
            </IonHeader>
            <IonContent color='main' className="ion-padding ion-text-center">
                <IonItem color='main' lines='none'>
                    <IonAvatar className='ion-margin-top'>
                        <img src="/public/avatar_sample.png" alt="Profile Picture" />
                    </IonAvatar>
                </IonItem>
                <IonTitle class='ion-margin-top'>Username</IonTitle>
                <IonText>Email@email.com</IonText>
                <IonTitle className='ion-margin-top'><h2><strong>User Progress</strong></h2></IonTitle>
                <IonCard style={{borderRadius:"10px"}}>
                    <IonCardContent>
                        <IonItem detail={true}>
                            <IonLabel>
                                <h3><strong>State the number (Dice Games)</strong></h3>
                                <p>COMPLETED &nbsp; - &nbsp; 100%</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem detail={true}>
                            <IonLabel>
                                <h3><strong>State the number (Dice Games)</strong></h3>
                                <p>COMPLETED &nbsp; - &nbsp; 100%</p>
                            </IonLabel>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Profile;