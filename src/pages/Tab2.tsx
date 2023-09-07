import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { IonIcon } from '@ionic/react';
import { menuOutline, personCircleOutline, bookOutline } from 'ionicons/icons';
import { IonSearchbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardTitle } from '@ionic/react';
import quiz from '../assests/task-square.png';
import resources from '../assests/book.png';
import challenges from '../assests/edit.png'

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonContent style={{'--ion-background-color':'antiquewhite'}} fullscreen>
        <link href="https://fonts.googleapis.com/css?family=Inria+Sans" rel="stylesheet" />
        
        <div className="header">
          <IonIcon icon={menuOutline} className="custom-icon" />

          <IonLabel className='header-text'>CodeQuiz Pro</IonLabel>

          <IonIcon icon={personCircleOutline} className='custom-icon' />

        </div>
        <div className='content'>
          <div className='search-container'>
            <IonSearchbar className='searchbar'></IonSearchbar>
          </div>
          <div className='quiz'>
            <IonCard className="card-button-1">
              <IonCardContent className="card-content">
                <div className="left-content">
                  <IonCardTitle className="card-title">Quizzes</IonCardTitle>
                  <div className="card-text">Test your knowledge</div>
                </div>
                <div className="right-content">
                  <img src={quiz} alt="quiz" style={{ paddingRight: '10px' }} />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
          <div className='challenges'>
            <IonCard className="card-button-3">
              <IonCardContent className="card-content">
                <div className="left-content">
                  <IonCardTitle className="card-title">Daily Challenges</IonCardTitle>
                  <div className="card-text">Enhance your coding skills</div>
                </div>
                <div className="right-content">
                  <img src={challenges} alt="challenges" style={{ paddingRight: '12px' }} />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
          <div className='learning'>
            <IonCard className="card-button-2">
              <IonCardContent className="card-content">
                <div className="left-content">
                  <IonCardTitle className="card-title">Learning Resources</IonCardTitle>
                  <div className="card-text">Develop your coding skills</div>
                </div>
                <div className="right-content">
                  <img src={resources} alt="resources" />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
