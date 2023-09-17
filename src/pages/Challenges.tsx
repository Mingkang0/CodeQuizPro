import { IonContent, IonHeader,  IonTitle, IonPage, IonText, IonToolbar, IonIcon, IonCardTitle, IonGrid, IonCard, IonCardContent, IonCardHeader, IonRow, IonCol, IonItem, IonInput, IonBackButton, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';
import { chevronBackOutline } from 'ionicons/icons';
import { BiLogoPython, BiLogoJava, BiLogoCPlusPlus } from 'react-icons/bi'
import { TbBrandJavascript, TbStarsFilled } from 'react-icons/tb'
import { FaPhp } from 'react-icons/fa6'
import SideMenu from '../components/SideMenu';
import programminglanguage from '../assests/languageInfo';

const Challenges: React.FC = () => {
  return (
    <>
      <SideMenu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="warning">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            {/* <IonIcon icon={chevronBackOutline} size="large" slot="start" className='custom-icon'>
          </IonIcon> */}
            <IonTitle><b>Daily Challenges</b></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="main">
          <IonGrid>
            <div className='language'>
              <div className='header-text ion-margin-top'>
                <IonTitle><b>Select programming language:</b></IonTitle>
              </div>
              <IonRow>
                {programminglanguage.map((item => (
                  <IonCol size="6" key={item.id}>
                    <IonCard className='card-button ion-padding'>
                      <IonCardContent>
                        <IonCardTitle>{item.language}</IonCardTitle>
                        <div className='ion-text-end'>
                          <span className='icon'>{item.icon}</span>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                )))}
              </IonRow>
            </div>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Challenges;