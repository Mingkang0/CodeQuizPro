import { IonContent, IonHeader, IonLabel, IonPage, IonToolbar, IonTitle,IonIcon, IonButton } from '@ionic/react';
import React from 'react';
import { chevronBackOutline } from 'ionicons/icons';
import './Quiz.css'

const Quiz: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent className='header ion-text-center'>
        <IonToolbar>
          <IonIcon icon={chevronBackOutline} size="large" slot="start" className='custom-icon'>
          </IonIcon>
          <IonTitle><b>Quizzes</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      </IonContent>
    </IonPage>
  )
}

export default Quiz;