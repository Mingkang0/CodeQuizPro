import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const SideMenu: React.FC = () => {

    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color="warning">
                    <IonTitle><strong>Main Menu</strong></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" className="ion-padding">
                <IonList>
                    <IonMenuToggle>
                        <IonItem routerLink="/quiz">
                            <IonLabel>Quizzes</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/language">
                            <IonLabel>Learning Resources</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default SideMenu;