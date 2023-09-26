import {
    IonRefresher, RefresherEventDetail, IonRefresherContent, IonContent, IonNavLink,
    IonButtons, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonAvatar, IonItem,
    IonText, IonButton, IonMenuButton
} from '@ionic/react';
import '../css/Profile.css'
import React, { useEffect, useState } from 'react';
import { pencilOutline } from 'ionicons/icons';
import SideMenu from '../../components/SideMenu';
import { auth, cloudDB } from '../../firebase.config';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import Progress from './Progress';
import programminglanguage from '../../assests/languageInfo';
import DefaultAvatar from '../../assests/Avatar/Avatar_1.png';

const Profile: React.FC = () => {
    const [user, setUser] = useState<any>();
    const [languageProgress, setLanguageProgress] = useState<any>();

    const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
        setTimeout(() => {
            fetchData();
            getLanguageInitialStatus();
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

    const getLanguageInitialStatus = async () => {
        try {
            const userUid = auth?.currentUser?.uid;
            const userDocRef = doc(cloudDB, 'Learning_Progress', `${userUid}`);

            const programmingLanguages = programminglanguage.map((language) => language.language);

            const progressLanguages: any = [];

            for (const language of programmingLanguages) {
                const collectionRef = collection(userDocRef, language);
                const querySnapshot = await getDocs(collectionRef);

                const languageProgress: any = [];
                querySnapshot.forEach((doc) => {
                    languageProgress.push(doc.data());
                });

                let completeness = 0;

                languageProgress.forEach((topic: any) => {
                    if (topic.isComplete) {
                        completeness++;
                    }
                });

                progressLanguages.push({ language, complete: completeness });
            }

            setLanguageProgress(progressLanguages);
            
        } catch (error) {
            console.log('Error getting subcollections:', error);
        }
    };

    useEffect(() => {
        fetchData();
        getLanguageInitialStatus();
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
                            <img src={user?.avatar || DefaultAvatar} alt="Avatar" />
                        </IonAvatar>
                    </IonItem>
                    <IonTitle class='ion-margin-top'>{user?.username || "Username"}</IonTitle>
                    <IonText>{auth?.currentUser?.email || "Email"}</IonText>
                    <IonTitle className='ion-margin-top'><h2><strong>Learning Progress</strong></h2></IonTitle>
                    <Progress languageProgress={languageProgress} />
                </IonContent>
            </IonPage>
        </>

    );
};

export default Profile;

