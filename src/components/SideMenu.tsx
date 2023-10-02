import React from 'react';
import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar,
    IonAlert,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase.config';
import { signOut } from 'firebase/auth';
import { logout } from '../pages/Auth/auth';
import { configInstance } from '../pages/Auth/config';

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

    const anonItems = [
        {
            title: 'Home',
            url: '/anonymous/home',
        },
        {
            title: 'Quizzes',
            url: '/anonymous/quiz',
        },
        {
            title: 'Daily Challenges',
            url: '/anonymous/challenges',
        },
        {
            title: 'Learning Resources',
            url: '/anonymous/language',
        },
    ];

    const [showLogoutAlert, setShowLogoutAlert] = React.useState(false);

    const showLogoutConfirmation = () => {
        setShowLogoutAlert(true);
    };

    const handleLogout = async () => {
        try {
            if (auth !== null) {
                await signOut(auth);
            } else {
                configInstance();
                await logout()
            }
            history.push('/login');
        } catch (err) {
            console.error(err);
        }
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
                        {auth?.currentUser ?
                            items.map((item, index) => (
                                <IonItem key={index} routerLink={item.url}>
                                    <IonLabel>{item.title}</IonLabel>
                                </IonItem>
                            ))
                            :

                            anonItems.map((item, index) => (
                                <IonItem key={index} routerLink={item.url}>
                                    <IonLabel>{item.title}</IonLabel>
                                </IonItem>
                            ))
                        }

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
