import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonRouterOutlet, IonButton, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './css/Home.css';
import { IonIcon } from '@ionic/react';
import { menuOutline, personCircleOutline } from 'ionicons/icons';
import { IonSearchbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardTitle } from '@ionic/react';
import quiz from '../assests/task-square.png';
import resources from '../assests/book.png';
import challenges from '../assests/edit.png'
import { Link, Redirect, Route, useHistory } from 'react-router-dom';
import Profile from './Profile';
import { useEffect, useState } from 'react';


const Home: React.FC = () => {
  const history =useHistory();
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const handleQuizClick = () => {
    history.push('/quiz');
    window.location.reload();
  };
  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='header ion-text-center'>
          <IonIcon slot='start' size='large' icon={menuOutline} className="ion-margin" />
          <IonTitle className=''><strong>CodeQuiz Pro</strong></IonTitle>
          <IonIcon slot='end' size='large' icon={personCircleOutline} className="ion-margin" />
        </IonToolbar>
      </IonHeader>

      <IonContent style={{ '--ion-background-color': 'antiquewhite' }} fullscreen>
        <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />
        <IonSearchbar color="light" placeholder="Search" className='searchbar ion-margin-top'></IonSearchbar>

        {/* Home content */}
        <div className='ion-margin'>
          {/* Quizz */}
          <IonCard className="card-button ion-padding" onClick={handleQuizClick} style={{ backgroundColor: '#ffbfbf' }}>
            <IonCardContent className='card-content'>
              <span>
                <IonCardTitle><h1><strong>Quizzes</strong></h1></IonCardTitle>
                <IonText color="dark"><h2>Test your knowledge</h2></IonText>
              </span>
              <img src={quiz} alt="quiz" />
            </IonCardContent>
          </IonCard>
          {/* Daily Challenges */}
          <IonCard className="card-button ion-padding" style={{ backgroundColor: '#ccfcc2' }}>
            <IonCardContent className='card-content'>
              <span>
                <IonCardTitle><h1><strong>Daily Challenges</strong></h1></IonCardTitle>
                <IonText color="dark"><h2>Enhance your coding skills</h2></IonText>
              </span>
              <img src={challenges} alt="challenges" />
            </IonCardContent>
          </IonCard>
          {/* Learning Resources */}
          <IonCard className="card-button ion-padding" style={{ backgroundColor: '#fff4cc' }}>
            <IonCardContent className='card-content'>
              <span>
                <IonCardTitle><h1><strong>Learning Resources</strong></h1></IonCardTitle>
                <IonText color="dark"><h2>Develop your coding skills</h2></IonText>
              </span>
              <img src={resources} alt="resources" style={{ paddingLeft: "5px" }} />
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
