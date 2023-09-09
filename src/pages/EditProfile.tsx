import { IonInput, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonList, IonAvatar, IonButton, IonIcon, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import './css/EditProfile.css';
import { cameraOutline } from 'ionicons/icons';

const EditProfile: React.FC = () => {
    const [showImageUpload, setShowImageUpload] = useState(false);

    const handleImageUploadClick = () => {
        // Implement your image upload logic here
        // You can use a file input, a modal, or any other method you prefer
        // For simplicity, we'll just toggle the "showImageUpload" state in this example
        setShowImageUpload(!showImageUpload);
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
                <IonInput value="xxxx" label="Username" labelPlacement="floating" fill="outline" placeholder="Enter Username"></IonInput>
                <IonInput value="email@domain.com" label="Email" labelPlacement="floating" fill="outline" type="email" placeholder='Enter email'></IonInput>
            </IonContent>
        </IonPage>
    );
};

export default EditProfile;