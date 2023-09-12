import { IonContent, IonHeader, IonButton, IonTitle, IonPage, IonText, IonToolbar, IonIcon, IonCardTitle, IonGrid, IonCard, IonCardContent, IonCardHeader, IonRow, IonCol, IonItem, IonInput, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';
import { chevronBackOutline } from 'ionicons/icons';
import { BiLogoPython, BiLogoJava, BiLogoCPlusPlus } from 'react-icons/bi'
import { TbBrandJavascript, TbStarsFilled } from 'react-icons/tb'
import { FaPhp } from 'react-icons/fa6'

import './css/Quiz.css'
import SideMenu from '../components/SideMenu';

const Quiz: React.FC = () => {
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

  const difficulty = ['Beginner', 'Intermediate', 'Advanced'];
  return (
    <>
      <SideMenu />
      <IonPage id='main-content'>
        <IonHeader>
          <IonToolbar color="warning">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle><b>Quizzes</b></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="main">
          <IonGrid>
            <div className='language'>
              <div className='header-text ion-margin-top'>
                <IonTitle><b>Select programming language:</b></IonTitle>
              </div>
              <IonRow>
                <div className="horizontal-scroll-container">
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
                </div>
              </IonRow>
            </div>
          </IonGrid>
          <IonGrid>
            <div className='difficulty'>
              <div className='header-text ion-margin-top'>
                <IonTitle><b>Select difficulty level:</b></IonTitle>
              </div>
              <IonRow>
                <div className="horizontal-scroll-container">
                  {difficulty.map((level, index) => (
                    <IonCol size="6" key={index}>
                      <IonCard className='card-button ion-padding'>
                        <IonCardContent>
                          <IonCardTitle>{level}</IonCardTitle>
                          <div className='level ion-text-end'>
                            {level === 'Beginner' ? (
                              <TbStarsFilled size={40} color="green" />
                            ) : level === 'Advanced' ? (
                              <TbStarsFilled size={40} color="red" />
                            ) : level === 'Intermediate' ? (
                              <TbStarsFilled size={40} color="orange" />
                            ) : null}
                          </div>
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                  ))}
                </div>
              </IonRow>
            </div>
          </IonGrid>
          <IonGrid>
            <div className='ion-text-center'>
              <IonButton className='button ion-padding'>Start Quiz</IonButton>
            </div>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Quiz;