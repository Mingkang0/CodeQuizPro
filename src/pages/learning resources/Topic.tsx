import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { ref, get } from 'firebase/database';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase.config';
import SideMenu from '../../components/SideMenu';
import { useHistory } from 'react-router-dom';

const Topic: React.FC = () => {
    const history = useHistory();
    const { language, topicId } = useParams<{ language: string, topicId: string }>();
    const [content, setContent] = React.useState<any>(null);
    const [isComplete, setIsComplete] = React.useState<any>(false);

    const getContent = async (language: any) => {
        try {
            const dbRef = ref(db, `resource/${language}/topics/${topicId}`);
            const snapshot = await get(dbRef);

            if (snapshot.exists()) {
                const data = snapshot.val();
                setContent(data);
            } else {
                console.log('No data available');
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    const handleBack = () => {
        history.push(`/learning/${language}`)
    };

    const handleComplete = () => {
        setIsComplete(!isComplete);
    };

    useEffect(() => {
        getContent(language);
    }, []);

    return (
        <>
            <SideMenu />
            <IonPage id='main-content'>
                <IonHeader>
                    <IonToolbar color='warning'>
                        <IonTitle><b>{language}</b> - Topic {topicId}</IonTitle>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent color='main' className="ion-padding">
                    {content ?
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>Topic {topicId}</IonCardSubtitle>
                                <IonCardTitle><h2><b>{content.title}</b></h2></IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <h4><b>Overview</b>:</h4>
                                <ul>
                                    {content.overview.split(/\.\s+/).map((sentence: any, index: any) => (
                                        <li key={index}>{sentence}</li>
                                    ))}
                                </ul>
                                <h4><b>Content</b>:</h4>
                                {content.content}
                            </IonCardContent>
                        </IonCard>

                        : <IonText>No content available. Will be updated soon.</IonText>}
                    <IonButton color='medium' onClick={handleBack}>Back</IonButton>
                    <IonButton color={isComplete?"success":""} className='ion-float-right' onClick={handleComplete}>
                        {isComplete ? 'Mark as Incomplete' : 'Mark as Complete'}
                    </IonButton>

                </IonContent>
            </IonPage>
        </>
    );
};

export default Topic;