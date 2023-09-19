import { IonContent, IonHeader,  IonTitle, IonPage, IonText, IonToolbar, IonIcon, IonCardTitle, IonGrid, IonCard, IonCardContent, IonCardHeader, IonRow, IonCol, IonItem, IonInput, IonBackButton, IonButtons, IonMenuButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import programminglanguage from '../../assests/languageInfo';
import { useHistory } from 'react-router';
import { language } from 'ionicons/icons';


const Challenges: React.FC = () => {

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const history = useHistory();
  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    if(selectedLanguage) {
      history.push(`/challenges/${selectedLanguage}`)
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
                    <IonCard className='card-button ion-padding' onClick={()=> handleLanguageSelect(item.language)}>
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