import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonGrid,
  IonIcon,
  IonImg,
  IonText,
} from '@ionic/react';

import pic from '../assests/congratulation_5278593.png'
import { useHistory } from 'react-router';

interface QuizResultsProps {
  correctAnswers: number;
  totalQuestions: number;
}

const QuizResults: React.FC<QuizResultsProps> = ({ correctAnswers, totalQuestions }) => {
  const history =useHistory();
  const handleReturnHome= () => {
   
    history.push('/');
  }
  return (
    <IonCard className="ion-margin">
      <IonCardContent>
        <IonCardTitle className=''>Quiz Results</IonCardTitle>
        <div className='pic' style={{ marginTop: '30px', marginBottom: '30px' , display: 'flex', justifyContent: 'center'}}>
        <IonImg src={pic} alt={pic} style={{width:'90%'}}></IonImg>
      </div>
      <IonGrid>
        <IonText>
          <strong>You answered {correctAnswers} out of {totalQuestions} questions correctly.</strong>
        </IonText>
        </IonGrid>
        <IonGrid>
        <IonText>
          <strong>Percentage: {(correctAnswers / totalQuestions) * 100}% </strong>
        </IonText>
        </IonGrid>
        <IonGrid>
        <IonButton expand='block' onClick={handleReturnHome}>Return to HomePage</IonButton>
        </IonGrid>
      </IonCardContent>
    </IonCard>

  );
};

export default QuizResults;