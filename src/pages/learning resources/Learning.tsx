import React, { useState } from 'react';
import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonItem,
    IonNavLink,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

const Learning: React.FC = () => {
    const [selectedSegment, setSelectedSegment] = useState<string>('notes');


    const renderContent = () => {
        if (selectedSegment === 'notes') {
            return (
                <>
                    <IonCardContent>
                        <IonNavLink >
                            <IonItem lines='none' detail={true}>
                                <IonLabel>
                                    <h2><strong>Overview</strong></h2>
                                    <small>10 minutes</small>
                                </IonLabel>
                            </IonItem>
                        </IonNavLink>
                        <IonNavLink >
                            <IonItem lines='none' detail={true}>
                                <IonLabel>
                                    <h2><strong>Variables</strong></h2>
                                    <small>5 minutes</small>
                                </IonLabel>
                            </IonItem>
                        </IonNavLink>
                    </IonCardContent>
                </>
            );
        } else if (selectedSegment === 'videos') {
            return (
                <>
                    <IonCardContent>Videos content goes here</IonCardContent>
                </>
            );
        }
    };

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color='warning'>
                        <IonButtons slot='start'>
                            <IonBackButton></IonBackButton>
                        </IonButtons>
                        <IonTitle>Learning Resources</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent color='main' className="ion-padding">
                    <IonSegment color='tertiary' value={selectedSegment} onIonChange={(e) => setSelectedSegment(e.detail.value as string)}>
                        <IonSegmentButton value="notes">
                            <IonLabel>Notes</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="videos">
                            <IonLabel>Videos</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                    <IonCard>
                        {renderContent()}
                    </IonCard>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Learning;
