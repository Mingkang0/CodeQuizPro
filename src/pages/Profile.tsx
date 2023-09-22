import { IonContent, IonNavLink, IonButtons, IonBackButton, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonAvatar, IonItem, IonText, IonLabel, IonButton, IonCardContent, IonCard, IonMenuButton } from '@ionic/react';
import './css/Profile.css'
import React, {useEffect, useState} from 'react';
import { pencilOutline } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import SideMenu from '../components/SideMenu';
import { auth, cloudDB } from '../firebase.config';
import { collection, getDoc, doc } from "firebase/firestore";
import avatar from '../assests/Avatar/Avatar_1.png';

const Profile: React.FC = () => {
    const [user, setUser] = useState<any>();
    async function selectImage() {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Photos,
            });
            // Handle the captured image here
        } catch (error) {
            // Handle any errors that occur during image capture
            console.error('Error capturing image:', error);
        }
    }

    useEffect(() => {
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
    
        fetchData();
      }, []);

    console.log(auth?.currentUser)
    console.log(user)
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
                            <img src={avatar} alt="Profile Picture" />
                        </IonAvatar>
                    </IonItem>
                    <IonTitle class='ion-margin-top'>{user?.username}</IonTitle>
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

