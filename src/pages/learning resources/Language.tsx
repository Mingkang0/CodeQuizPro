import { IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonNavLink, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import SideMenu from '../../components/SideMenu';
import programminglanguage from '../../assests/languageInfo';
import { useHistory } from 'react-router-dom';

const Language: React.FC = () => {
    const history = useHistory();
    
    const handleLanguage = (language: string) => {
        history.push(`/learning/${language}`);
    }

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