import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import SideMenu from '../../components/SideMenu';

const Language: React.FC = () => {

    return (
        <>
            <SideMenu />
            <IonPage id='main-content'>
                <IonHeader>
                    <IonToolbar color='warning'>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Learning Resources</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent color='main' className="ion-padding">
                    <IonList className='borderRadius'>
                        <IonNavLink >
                            <IonItem lines='none' detail={true} routerLink='/learning'>
                                <IonLabel>
                                    <h2><strong>C++</strong></h2>
                                    <small>12 topics</small>
                                </IonLabel>
                            </IonItem>
                        </IonNavLink>
                        <IonNavLink >
                            <IonItem lines='none' detail={true} routerLink='/learning'>
                                <IonLabel>
                                    <h2><strong>Java</strong></h2>
                                    <small>12 topics</small>
                                </IonLabel>
                            </IonItem>
                        </IonNavLink>
                        <IonNavLink >
                            <IonItem lines='none' detail={true} routerLink='/learning'>
                                <IonLabel>
                                    <h2><strong>PHP</strong></h2>
                                    <small>12 topics</small>
                                </IonLabel>
                            </IonItem>
                        </IonNavLink>
                    </IonList>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Language;