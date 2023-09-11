import { IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonNavLink, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import SideMenu from '../../components/SideMenu';
import { BiLogoPython, BiLogoJava, BiLogoCPlusPlus } from 'react-icons/bi';
import { FaPhp } from 'react-icons/fa6';
import { TbBrandJavascript } from 'react-icons/tb';

const Language: React.FC = () => {
    const programminglanguage = [
        {
            id: 1,
            language: 'Python',
            icon: <BiLogoPython size={50} style={{ color: '#00b386' }} />,
        },
        {
            id: 2,
            language: 'Java',
            icon: <BiLogoJava size={50} style={{ color: '#b32400' }} />,
        },
        {
            id: 3,
            language: 'JavaScript',
            icon: <TbBrandJavascript size={50} style={{ color: '#cccc00' }} />,
        },
        {
            id: 4,
            language: 'PHP',
            icon: <FaPhp size={50} style={{ color: ' #990099' }} />,
        },
        {
            id: 5,
            language: 'C++',
            icon: <BiLogoCPlusPlus size={50} style={{ color: '#6666ff' }} />,
        },
    ]

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
                <IonContent color='main'>
                    {/* <IonList className='borderRadius'>
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
                    </IonList> */}
                    <IonGrid>
                        <IonRow>
                            {programminglanguage.map((item => (
                                <IonCol size="6" key={item.id}>
                                    <IonCard routerLink='/learning' className='card-button ion-padding'>
                                        <IonCardContent >
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