import { IonContent, IonHeader, IonButton, IonTitle, IonPage, IonText, IonToolbar, IonIcon, IonCardTitle, IonGrid, IonCard, IonCardContent, IonCardHeader, IonRow, IonCol, IonItem, IonInput, IonButtons, IonMenuButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import programminglanguage from '../assests/languageInfo';
import { BiLogoPython, BiLogoJava, BiLogoCPlusPlus } from 'react-icons/bi'
import { TbBrandJavascript, TbStarsFilled } from 'react-icons/tb'
import { FaPhp } from 'react-icons/fa6'
import { useHistory } from 'react-router';

import './css/Quiz.css'
import SideMenu from '../components/SideMenu';

const Quiz: React.FC = () => {
  const difficulty = ['Beginner', 'Intermediate', 'Advanced'];
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const handleSelectedLanguage = (language: string) => {
    setSelectedLanguage(language);
    console.log(language);
    if (selectedDifficulty !== null) {
      setIsSubmitEnabled(true)
    }
  }

  const handleSelectedDifficulty = (Difficulty: string) => {
    setSelectedDifficulty(Difficulty);
    console.log(Difficulty);
    if (selectedLanguage !== null) {
      setIsSubmitEnabled(true)
    }
  }
  const history = useHistory();

  const StartQuiz = () => {
    if (selectedDifficulty && selectedLanguage) {
      history.push(`/question/${selectedLanguage}/${selectedDifficulty}`)
      window.location.reload();
    }
  }
  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);
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
                      <IonCard className='card-button ion-padding'
                        color={selectedLanguage === item.language ? "secondary" : ""}
                        onClick={() => handleSelectedLanguage(item.language)}>
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
                      <IonCard className='card-button ion-padding'
                        color={selectedDifficulty === level ? "primary" : ""}
                        onClick={() => handleSelectedDifficulty(level)}>
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
              <IonButton className='button ion-padding' disabled={!isSubmitEnabled} onClick={() => StartQuiz()}>Start Quiz</IonButton>
            </div>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Quiz;