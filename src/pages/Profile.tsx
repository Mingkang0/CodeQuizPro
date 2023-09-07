import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Profile: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ">
                <div style={{margin:"0px auto", width:"100px"}}>
                   <p>Username</p>
                </div>
                <div>
                    <span>Gender</span>
                    <span>Age</span>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;