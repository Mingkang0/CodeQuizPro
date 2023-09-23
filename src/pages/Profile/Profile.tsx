import {
    IonRefresher, RefresherEventDetail, IonRefresherContent, IonContent, IonNavLink,
    IonButtons, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonAvatar, IonItem,
    IonText, IonLabel, IonButton, IonCardContent, IonCard, IonMenuButton
} from '@ionic/react';
import '../css/Profile.css'
import React, { useEffect, useState } from 'react';
import { pencilOutline } from 'ionicons/icons';
import SideMenu from '../../components/SideMenu';
import { auth, cloudDB } from '../../firebase.config';
import { collection, getDoc, doc } from "firebase/firestore";

const Profile: React.FC = () => {
    const [user, setUser] = useState<any>();

    const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
        setTimeout(() => {
            fetchData();
            event.detail.complete();
        }, 2000);
    }


    const fetchData = async () => {
        try {
            const userRef = doc(collection(cloudDB, 'User'), auth?.currentUser?.uid);
            const docSnapshot = await getDoc(userRef);

            if (docSnapshot.exists()) {
                setUser(docSnapshot.data());
            } else {
                console.log('No such user!');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <SideMenu />
            <IonPage id='main-content'>
                <IonHeader>
                    <IonToolbar color='warning'>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle className='ion-margin'><strong>Profile</strong></IonTitle>
                        <IonNavLink slot="end" routerDirection="forward"  >
                            <IonButton color='dark' fill='clear' routerLink="/editProfile">
                                <IonIcon icon={pencilOutline}></IonIcon>
                            </IonButton>
                        </IonNavLink>
                    </IonToolbar>
                </IonHeader>
                <IonContent color='main' className="ion-padding ion-text-center">
                    <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>
                    <IonItem color='main' lines='none'>
                        <IonAvatar className='ion-margin-top'>
                            <img src={user?.avatar} alt="Profile Picture" />
                        </IonAvatar>
                    </IonItem>
                    <IonTitle class='ion-margin-top'>{user?.username || "Username"}</IonTitle>
                    <IonText>{auth?.currentUser?.email || "Email"}</IonText>
                    <IonTitle className='ion-margin-top'><h2><strong>Learning Progress</strong></h2></IonTitle>
                    <IonCard style={{ borderRadius: "10px" }}>
                        <IonCardContent>
                            <IonItem detail={true} routerLink='/learning'>
                                <IonLabel>
                                    <h3><strong>C++</strong></h3>
                                    <p>COMPLETED &nbsp; - &nbsp; 100%</p>
                                </IonLabel>
                            </IonItem>
                            <IonItem detail={true}>
                                <IonLabel>
                                    <h3><strong>Python</strong></h3>
                                    <p>IN PROGRESS &nbsp; - &nbsp; 70%</p>
                                </IonLabel>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        </>

    );
};

export default Profile;

