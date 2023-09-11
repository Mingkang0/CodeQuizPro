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
import Notes from './Notes';

const Learning: React.FC = () => {
    const topics = [
        {
            title: 'Overview',
            duration: '30 minutes',
        },
        {
            title: 'Variables and Data Types',
            duration: '30 minutes',
        },
        {
            title: 'Operators and Expressions ',
            duration: '10 minutes',
        },
        {
            title: 'Control Structures',
            duration: '15 minutes',
        },
        {
            title: 'Functions',
            duration: '15 minutes',
        },
        {
            title: 'Arrays and Strings',
            duration: '16 minutes',
        },
        {
            title: 'Pointers and References ',
            duration: '20 minutes',
        },
        {
            title: 'Object-Oriented Programming (OOP)',
            duration: '4 hours',
        },
        {
            title: 'Exception Handling',
            duration: '2 hours',
        },
        {
            title: 'File Input/Output',
            duration: '2 hours',
        },
        {
            title: 'Standard Template Library (STL)',
            duration: '3 hours',
        },
        {
            title: 'Debugging and Testing',
            duration: '2 hours',
        },
        {
            title: 'Best Practices and Coding Standards',
            duration: '2 hours',
        },
    ];

    const videos = [
        {
            src: "sample.mp4"
        }
    ]
    const [selectedSegment, setSelectedSegment] = useState<string>('notes');


    const renderContent = () => {
        if (selectedSegment === 'notes') {
            return (
                <>
                    <Notes topics={topics} />
                </>
            );
        } else if (selectedSegment === 'videos') {
            return (
                <>
                    <IonCardContent>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/ZzaPdXTrSb8?si=66rjSSn8DJ9DRO-k"
                            title="Embedded Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </IonCardContent>
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
