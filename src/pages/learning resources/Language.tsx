import { IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonNavLink, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, {useEffect} from 'react';
import SideMenu from '../../components/SideMenu';
import programminglanguage from '../../assests/languageInfo';
import { useHistory } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { cloudDB, auth } from '../../firebase.config';

const Language: React.FC = () => {
    const history = useHistory();
    
    const handleLanguage = (language: string) => {
        history.push(`/learning/${language}`);
    }

    const getLanguageInitialStatus = async () => {
        try {
            const docRef = doc(cloudDB, 'Learning_Progress', `${auth?.currentUser?.uid}`);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                const data = docSnap.data();
            } else {
                console.log('No language progress available');
                
            }
        } catch (error) {
            console.log('Error getting document:', error);
        }
    };

    useEffect(()=>{
        getLanguageInitialStatus();
    },[])

    return (
        <>
            <SideMenu />
            <IonPage id='main-content'>
                <IonHeader>
                    <IonToolbar color='warning'>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle><b>Learning Resources</b></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent color='main'>
                    <IonGrid>
                        <IonRow>
                            {programminglanguage.map((item => (
                                <IonCol size="6" key={item.language}>
                                    <IonCard
                                        onClick={() => handleLanguage(item.language)} 
                                        className='card-button ion-padding'
                                    >
                                        <IonCardContent>
                                            <IonCardTitle><strong>{item.language}</strong></IonCardTitle>
                                            <div className='ion-text-end ion-padding-top'>
                                                <span className='icon'>{item.icon}</span>
                                            </div>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            )))}
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Language;