import { IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { auth, cloudDB } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';

const Progress: React.FC = () => {


    return (
        <IonCard style={{ borderRadius: "10px" }}>
            <IonCardContent>
                <IonItem detail={true} routerLink='/learning'>
                    <IonLabel>
                        <h3><strong>C++</strong></h3>
                        <p>COMPLETED &nbsp; - &nbsp; 100%</p>
                    </IonLabel>
                </IonItem>
            </IonCardContent>
        </IonCard>
    );
};

export default Progress;