import React from 'react';
import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAlert,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const SideMenu: React.FC = () => {
    const history = useHistory();

    const items = [
        {
            title: 'Quizzes',
            url: '/quiz',
        },
        {
            title: 'Daily Challenges',
            url: '/challenges',
        },
        {
            title: 'Learning Resources',
            url: '/language',
        },
    ];

    const [showLogoutAlert, setShowLogoutAlert] = React.useState(false);

    const showLogoutConfirmation = () => {
        setShowLogoutAlert(true);
    };

    const handleLogout = () => {
        history.push('/login');
    };

    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color="warning">
                    <IonTitle>
                        <strong>Main Menu</strong>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light" className="ion-padding">
                <IonList>
                    <IonMenuToggle>
                        {items.map((item, index) => (
                            <IonItem key={index} routerLink={item.url}>
                                <IonLabel>{item.title}</IonLabel>
                            </IonItem>
                        ))}
                        <IonItem onClick={() => showLogoutConfirmation()}><strong>Logout</strong></IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>

            {/* Logout confirmation dialog */}
            <IonAlert
                isOpen={showLogoutAlert}
                onDidDismiss={() => setShowLogoutAlert(false)}
                header="Confirm Logout"
                message="Are you sure you want to logout?"
                buttons={[
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            setShowLogoutAlert(false);
                        },
                    },
                    {
                        text: 'Logout',
                        handler: () => {
                            handleLogout();
                        },
                    },
                ]}
            />
        </IonMenu>
    );
};

export default SideMenu;
