import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { ref, get } from 'firebase/database';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, cloudDB, auth } from '../../firebase.config';
import SideMenu from '../../components/SideMenu';
import { useHistory } from 'react-router-dom';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

const Topic: React.FC = () => {
    const history = useHistory();
    const { language, topicId } = useParams<{ language: string, topicId: string }>();
    const [content, setContent] = React.useState<any>(null);
    const [isComplete, setIsComplete] = React.useState<any>();

    const addTopicCompleteStatus = async () => {
        try {
            const docRef = doc(cloudDB, 'Learning_Progress', `${auth?.currentUser?.uid}`, `${language}`, `${topicId}`);
            await setDoc(docRef, {
                isComplete: false
            });
        } catch (error) {
            console.log('Error getting document:', error);
        }
    };

    const getCompleteStatus = async () => {
        try {
            const docRef = doc(cloudDB, 'Learning_Progress', `${auth?.currentUser?.uid}`, `${language}`, `${topicId}`);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                const data = docSnap.data();
                console.log(data)
                setIsComplete(data?.isComplete);
            } else {
                console.log('No such document! Creating new complete status...');
                await addTopicCompleteStatus();
            }
        } catch (error) {
            console.log('Error getting document:', error);
        }
    };

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
        try {
            setIsComplete(!isComplete);
            const docRef = doc(cloudDB, 'Learning_Progress', `${auth?.currentUser?.uid}`, `${language}`, `${topicId}`);
            updateDoc(docRef, {
                isComplete: !isComplete
            });
            console.log("Update complete status successful")
        } catch (error) {
            console.log("Update error: ", error)
        }
    };

    useEffect(() => {
        getContent(language);
        getCompleteStatus();
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
                                <br />
                                {content.code ? (
                                    <>
                                        <br />
                                        <h4><b>Code</b>:</h4>
                                        {content.code.map((line: any, index: any) => (
                                            <div key={index}>{line}</div>
                                        ))}
                                    </>
                                ) : null}

                            </IonCardContent>
                        </IonCard>

                        : <IonText>No content available. Will be updated soon.</IonText>}
                    <IonButton color='medium' onClick={handleBack}>Back</IonButton>
                    <IonButton color={isComplete ? "success" : ""} className='ion-float-right' onClick={handleComplete}>
                        {isComplete ? 'Mark as Incomplete' : 'Mark as Complete'}
                    </IonButton>

                </IonContent>
            </IonPage>
        </>
    );
};

export default Topic;