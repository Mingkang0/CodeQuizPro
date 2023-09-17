import { IonInput, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonList, IonAvatar, IonButton, IonIcon, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import './css/EditProfile.css';
import { cameraOutline } from 'ionicons/icons';

const EditProfile: React.FC = () => {
    const [showImageUpload, setShowImageUpload] = useState(false);
    const [username, setUsername] = useState<any>("");
    const [email, setEmail] = useState<any>("");

    const onUsernameChange = (e: any) => {
        setUsername(e.detail.value);
        console.log(username);
    }

    const onEmailChange = (e: any) => {
        setEmail(e.detail.value);
        console.log(email);
    }

    const handleImageUploadClick = () => {
        setShowImageUpload(!showImageUpload);
    };

    const handleSaveClick = () => {
        console.log("The profile is updated")
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
                <IonItem color='main' lines='none'>
                    <IonAvatar className='ion-margin-top'>
                        <img src="/public/avatar_sample.png" alt="Profile Picture" />
                    </IonAvatar>
                </IonItem>
                <IonButtons>
                    <IonButton size='small' color='medium' fill='outline' shape='round' id='uploadProfile'>
                        Upload <IonIcon slot="end" icon={cameraOutline}></IonIcon>
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
                    value={email}
                    onIonChange={onEmailChange}
                    label="Email"
                    labelPlacement="floating"
                    fill="outline"
                    type="email"
                    placeholder='Enter email'
                ></IonInput>
                <IonButtons>
                    <IonButton onClick={handleSaveClick} type='submit' color='tertiary' fill='solid' shape='round' expand='block' id='saveBtn'>SAVE </IonButton>
                </IonButtons>
            </IonContent>
        </IonPage>
    );
};

export default EditProfile;
