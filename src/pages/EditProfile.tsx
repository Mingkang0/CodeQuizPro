import { IonInput, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonList, IonAvatar, IonButton, IonIcon, IonLabel, IonToast } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './css/EditProfile.css';
import { cameraOutline } from 'ionicons/icons';
import { auth } from '../firebase.config';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { cloudDB } from '../firebase.config';
import AvatarSelectionModal from '../assests/Avatar/AvatarList';


const EditProfile: React.FC = () => {
    const [showImageUpload, setShowImageUpload] = useState(false);
    const [username, setUsername] = useState<any>();
    const [update, setUpdate] = useState<any>(null);
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null); // Track selected avatar
    const [isAvatarSelectionModalOpen, setIsAvatarSelectionModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRef = doc(collection(cloudDB, 'User'), auth?.currentUser?.uid);
                const docSnapshot = await getDoc(userRef);

                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    setUsername(userData?.username);
                } else {
                    console.log('No such user!');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const onUsernameChange = (e: any) => {
        setUsername(e.detail.value);
        console.log(username);
    }

    const handleImageUploadClick = () => {
        setShowImageUpload(!showImageUpload);
    };

    const handleAvatarSelection = (avatar: string) => {
        setSelectedAvatar(avatar);
    };

    const handleSaveClick = () => {
        try {
            const userRef = doc(collection(cloudDB, 'User'), auth?.currentUser?.uid);
            const payload = { username, avatar: selectedAvatar };
            setDoc(userRef, payload, { merge: true });
            setUpdate('The profile is updated');
        } catch (error) {
            console.log("Update error: ", error);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='warning'>
                    <IonTitle>Edit Profile</IonTitle>
                    <IonButtons slot='start'>
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent color='main' className="ion-padding">
                <IonToast
                    isOpen={!!update}
                    message={update || ''}
                    duration={3000}
                    onDidDismiss={() => setUpdate(null)}
                    color="success"
                    position='middle'
                    buttons={[
                        {
                            text: 'OK',
                            role: 'cancel',
                        },
                    ]}
                />
                <IonItem color='main' lines='none'>
                    <IonAvatar className='ion-margin-top'>
                        <img src="/src/assests/Avatar/Avatar_1.png" alt="Profile Picture" />
                    </IonAvatar>
                </IonItem>
                <IonButtons>
                    <IonButton onClick={() => { setIsAvatarSelectionModalOpen(true) }} size='small' color='medium' fill='outline' shape='round' id='uploadProfile'>
                        Select <IonIcon slot="end" icon={cameraOutline}></IonIcon>
                    </IonButton>
                </IonButtons>
                <IonInput
                    value={username}
                    onIonChange={onUsernameChange}
                    label="Username"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter Username"
                ></IonInput>
                <IonInput
                    disabled={true}
                    value={auth?.currentUser?.email}
                    label="Email"
                    labelPlacement="floating"
                    fill="outline"
                    type="email"
                    placeholder='Enter email'
                ></IonInput>
                <IonButtons>
                    <IonButton onClick={handleSaveClick} type='submit' color='tertiary' fill='solid' shape='round' expand='block' id='saveBtn'>SAVE </IonButton>
                </IonButtons>
                <AvatarSelectionModal
                    isOpen={isAvatarSelectionModalOpen}
                    onClose={() => setIsAvatarSelectionModalOpen(false)}
                    onSelectAvatar={handleAvatarSelection}
                />
            </IonContent>
        </IonPage>
    );
};

export default EditProfile;
