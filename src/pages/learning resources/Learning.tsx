import React, { useEffect, useState } from 'react';
import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import Notes from './Notes';
import { useParams } from 'react-router-dom';
import { ref, get, set } from 'firebase/database';
import { db } from '../../firebase.config';


const Learning: React.FC = () => {
    const { language } = useParams<{ language: string }>();
    const [topics, setTopics] = useState<any>(null);
    const [videos, setVideos] = useState<any>(null);
    const [selectedSegment, setSelectedSegment] = useState<string>('notes');

    const renderContent = () => {
        if (selectedSegment === 'notes') {
            return (
                <>
                    {topics ? <Notes topics={topics} language={language} /> :
                        <IonCardContent className='ion-margin'>No notes available. Will be updated soon.</IonCardContent>}
                </>
            );
        } else if (selectedSegment === 'videos') {
            return (
                <>
                    {
                        videos ?
                            <>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={videos}
                                    title="Embedded Video"
                                    allowFullScreen
                                ></iframe>
                            </>
                            : <IonCardContent className='ion-margin'>No videos available. Will be updated soon.</IonCardContent>
                    }
                </>
            );
        }
    };

    const getTopics = async (language: any) => {
        try {
            const dbRef = ref(db, `resource/${language}/topics`);
            const videoRef = ref(db, `resource/${language}/video`);
            const snapshot = await get(dbRef);
            const videoSnapshot = await get(videoRef);

            if (snapshot.exists()) {
                const data = snapshot.val();
                setTopics(data);
            } else {
                console.log('No data available');
            }

            if (videoSnapshot.exists()) {
                const data = videoSnapshot.val();
                setVideos(data.url);
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    useEffect(() => {
        getTopics(language);
    }, []);

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color='warning'>
                        <IonButtons slot='start'>
                            <IonBackButton></IonBackButton>
                        </IonButtons>
                        <IonTitle>Learning Resources - <b>{language}</b></IonTitle>
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
                        <IonCardContent>
                            {renderContent()}
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Learning;
