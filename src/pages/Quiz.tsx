import { IonContent, IonHeader, IonLabel, IonPage } from '@ionic/react';
import React from 'react';

const Quiz: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className='header'>
        <div className='header-text'>
          <IonLabel>Quizzes</IonLabel>
        </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Quiz;