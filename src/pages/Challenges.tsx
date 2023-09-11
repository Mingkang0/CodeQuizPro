import { IonContent, IonHeader, IonButton, IonTitle, IonPage, IonText, IonToolbar, IonIcon, IonCardTitle, IonGrid, IonCard, IonCardContent, IonCardHeader, IonRow, IonCol, IonItem, IonInput } from '@ionic/react';
import React from 'react';
import { chevronBackOutline } from 'ionicons/icons';
import { BiLogoPython, BiLogoJava, BiLogoCPlusPlus } from 'react-icons/bi'
import { TbBrandJavascript, TbStarsFilled } from 'react-icons/tb'
import { FaPhp } from 'react-icons/fa6'


const Challenges: React.FC = () => {
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
    <IonPage>
      <IonHeader className='ion-text-center'>
        <IonToolbar color="warning">
          <IonIcon icon={chevronBackOutline} size="large" slot="start" className='custom-icon'>
          </IonIcon>
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
  )
}

export default Challenges;